const express = require("express");
const AWS = require("aws-sdk");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname));

AWS.config.update({
  region: "ap-southeast-1"
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "url-mapping";

// Halaman utama
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Membuat short URL
app.post("/shorten", async (req, res) => {

  const { originalUrl } = req.body;

  if (!originalUrl) {
    return res.status(400).json({
      message: "URL wajib diisi"
    });
  }

  // Generate short code random
  const shortCode = Math.random().toString(36).substring(2, 8);

  const params = {
    TableName: TABLE_NAME,
    Item: {
      id: shortCode,
      nama: originalUrl
    }
  };

  try {

    await dynamodb.put(params).promise();

    const shortUrl = `http://13.229.59.129:3000/${shortCode}`;

    res.json({
      shortUrl,
      shortCode,
      originalUrl
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Gagal membuat short URL"
    });

  }

});

// Redirect short URL ke URL asli
app.get("/:code", async (req, res) => {

  const code = req.params.code;

  const params = {
    TableName: TABLE_NAME,
    Key: {
      id: code
    }
  };

  try {

    const data = await dynamodb.get(params).promise();

    if (!data.Item) {
      return res.status(404).send("Short URL tidak ditemukan");
    }

    return res.redirect(data.Item.nama);

  } catch (err) {

    console.error(err);
    res.status(500).send("Server Error");

  }

});

// Ambil semua data
app.get("/api/data", async (req, res) => {

  const params = {
    TableName: TABLE_NAME
  };

  try {

    const data = await dynamodb.scan(params).promise();
    res.json(data.Items);

  } catch (err) {

    console.error(err);
    res.status(500).send(err);

  }

});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});