# Cloud-Based URL Shortener System

Project ini merupakan sistem pemendek URL berbasis cloud yang dikembangkan sebagai bagian dari Final Project mata kuliah Cloud Computing.

## Latar Belakang

Dalam penggunaan internet sehari-hari, URL yang panjang sering kali sulit dibaca, dibagikan, dan kurang efisien terutama dalam konteks media sosial, presentasi, maupun komunikasi digital. Selain itu, URL yang panjang juga berpotensi menimbulkan kesalahan saat diketik ulang.

Untuk mengatasi permasalahan tersebut, diperlukan suatu sistem yang mampu mempersingkat URL tanpa mengubah tujuan aksesnya. Dengan memanfaatkan teknologi cloud computing, sistem ini dapat dibangun secara scalable, efisien, dan mudah diakses dari mana saja tanpa perlu mengelola infrastruktur fisik.

## Tujuan Proyek

Tujuan dari proyek ini adalah:

- Membangun sistem pemendek URL berbasis cloud
- Memudahkan pengguna dalam membagikan link secara ringkas dan efisien
- Mengimplementasikan arsitektur serverless yang scalable dan cost-effective
- Mengintegrasikan berbagai layanan cloud dalam satu sistem yang saling terhubung
- Menyediakan sistem yang dapat diakses secara online dengan performa yang baik

## Cloud Platform

Proyek ini menggunakan layanan dari Amazon Web Services.

## Layanan Cloud yang Digunakan

Beberapa layanan cloud yang digunakan dalam sistem ini antara lain:

- **Amazon S3**  
  Digunakan untuk hosting frontend website karena bersifat statis, scalable, dan memiliki biaya yang rendah.

- **Amazon CloudFront**  
  Digunakan sebagai Content Delivery Network (CDN) untuk mempercepat distribusi konten kepada pengguna dengan latency rendah.

- **Amazon API Gateway**  
  Digunakan untuk membuat dan mengelola API yang menghubungkan frontend dengan backend.

- **AWS Lambda**  
  Digunakan sebagai backend serverless untuk memproses pembuatan URL pendek dan melakukan redirect ke URL asli.

- **Amazon DynamoDB**  
  Digunakan sebagai database NoSQL untuk menyimpan mapping antara URL pendek dan URL asli.

- **Amazon CloudWatch**  
  Digunakan untuk monitoring dan logging sistem agar aktivitas dan performa sistem dapat dipantau secara real-time.

- **AWS IAM (Identity and Access Management)**  
  Digunakan untuk mengatur hak akses dan keamanan antar layanan cloud.

## Arsitektur Sistem

Sistem menggunakan arsitektur serverless dengan alur sebagai berikut:

User → CloudFront → Amazon S3 (Frontend) → API Gateway → AWS Lambda → DynamoDB → Redirect ke URL asli

Monitoring sistem dilakukan menggunakan CloudWatch dan pengaturan keamanan menggunakan IAM.

## Estimasi Biaya

Estimasi biaya bulanan menggunakan AWS Pricing Calculator adalah sebagai berikut:

| Layanan | Estimasi Biaya |
|--------|---------------|
| Amazon S3 | ± $1 |
| CloudFront | ± $1 – $2 |
| API Gateway | ± $1 – $2 |
| AWS Lambda | Free Tier / ± $1 |
| DynamoDB | ± $1 – $2 |
| CloudWatch | Free / ± $1 |
| IAM | Free |

Total estimasi biaya: **± $5 – $10 per bulan**  
(sekitar Rp80.000 – Rp160.000)

Biaya ini dapat meningkat seiring dengan pertumbuhan jumlah pengguna dan trafik sistem, namun tetap dapat dikontrol karena menggunakan arsitektur serverless berbasis **pay-as-you-go**.

## Struktur Repository

```
cloud-url-shortener
│
├── terraform
│   ├── main.tf
│   └── variables.tf
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

## Anggota Tim

Kelompok 14

- Naisya Mustika (2330205030050)
- Yiyin Febriani (2330205030064)
- Andhara Ester Carlony (2330305030080)
- Adella Ananda Putri (2330305030102)

## Institusi

Jurusan Teknik Informatika  
Fakultas Teknik  
Universitas Palangka Raya  
2026
