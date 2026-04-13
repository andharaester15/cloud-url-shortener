# Cloud-Based URL Shortener System

Project ini merupakan sistem pemendek URL berbasis cloud yang dibangun menggunakan layanan dari Amazon Web Services (AWS). Sistem ini dirancang menggunakan arsitektur serverless sehingga scalable, efisien, dan memiliki biaya operasional yang rendah.

## Latar Belakang
URL yang panjang sering kali sulit dibaca dan dibagikan, terutama pada media sosial atau komunikasi digital. Oleh karena itu, diperlukan sistem yang dapat mempersingkat URL tanpa mengubah tujuan aksesnya.

Dengan memanfaatkan teknologi cloud computing, sistem URL shortener dapat dibangun secara scalable dan mudah diakses dari mana saja.

## Tujuan Proyek
- Membuat sistem pemendek URL berbasis cloud
- Mengimplementasikan arsitektur serverless
- Mengintegrasikan berbagai layanan cloud AWS
- Membangun sistem yang scalable dan cost-effective

## Arsitektur Sistem

Sistem menggunakan arsitektur serverless dengan komponen:

- Amazon S3 (Frontend Hosting)
- CloudFront (Content Delivery Network)
- API Gateway (API Management)
- AWS Lambda (Backend Processing)
- DynamoDB (Database)
- CloudWatch (Monitoring)
- IAM (Security & Access Control)

Alur sistem:

User → CloudFront → S3 → API Gateway → Lambda → DynamoDB

## Struktur Repository

```
cloud-url-shortener
│
├── terraform
│   ├── main.tf
│   ├── variables.tf
│
├── app
│   ├── frontend
│   └── backend
│
├── docs
│   └── architecture.png
│
└── README.md
```

## Estimasi Biaya Cloud

Estimasi biaya menggunakan AWS Pricing Calculator:

| Service | Estimasi |
|------|------|
| S3 | $1 |
| CloudFront | $1-2 |
| API Gateway | $1-2 |
| Lambda | Free tier |
| DynamoDB | $1-2 |

Total estimasi: **$5 – $10 per bulan**

## Anggota Tim

Kelompok 14

- Naisya Mustika  
- Yiyin Febriani  
- Andhara Ester Carlony  
- Adella Ananda Putri  

## Teknologi yang Digunakan

- AWS Cloud
- Serverless Architecture
- Terraform
- GitHub

## Lisensi
MIT License
