const express = require("express");
const AWS = require("aws-sdk");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

AWS.config.update({
  region: "ap-southeast-1"
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

// Nama tabel DynamoDB kalian
const TABLE_NAME = "url-mapping";

// Route test
app.get("/", (req, res) => {
  res.send("API Running");
});

// Tambah data ke DynamoDB
app.post("/add", async (req, res) => {
  const { id, nama } = req.body;

  const params = {
    TableName: TABLE_NAME,
    Item: {
      id,
      nama
    }
  };

  try {
    await dynamodb.put(params).promise();
    res.send("Data berhasil ditambahkan");
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
});

// Ambil semua data
app.get("/data", async (req, res) => {
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

// Jalankan server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});