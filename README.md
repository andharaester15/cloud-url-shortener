# Cloud-Based URL Shortener System

Project ini merupakan sistem pemendek URL berbasis cloud yang dikembangkan sebagai bagian dari Final Project mata kuliah Cloud Computing.

## Latar Belakang

URL yang panjang sering kali sulit dibaca, dibagikan, dan kurang efisien digunakan pada media sosial, dokumen, maupun komunikasi digital. Selain itu, URL yang panjang berpotensi menimbulkan kesalahan saat diketik ulang oleh pengguna.

Untuk mengatasi permasalahan tersebut, dikembangkan sistem URL Shortener yang mampu mengubah URL panjang menjadi URL pendek tanpa mengubah tujuan aksesnya. Sistem ini dibangun dengan memanfaatkan layanan cloud Amazon Web Services (AWS) sehingga lebih fleksibel, mudah dikelola, dan dapat diakses secara online.

## Tujuan Proyek

Tujuan dari proyek ini adalah:

* Membangun sistem URL Shortener berbasis cloud.
* Memudahkan pengguna dalam membagikan URL secara lebih ringkas.
* Mengimplementasikan layanan cloud AWS pada aplikasi web.
* Menerapkan monitoring dan alerting untuk memantau kondisi sistem.
* Mempelajari penerapan Infrastructure as Code (IaC) menggunakan Terraform.

## Cloud Platform

Proyek ini menggunakan layanan dari Amazon Web Services (AWS).

## Layanan Cloud yang Digunakan

### Amazon EC2

Digunakan sebagai server utama untuk menjalankan aplikasi URL Shortener berbasis Node.js dan Express.js.

### Amazon DynamoDB

Digunakan sebagai database NoSQL untuk menyimpan data URL asli dan short code yang dihasilkan sistem.

### Amazon CloudWatch

Digunakan untuk memonitor performa server, seperti penggunaan CPU, memori, disk, dan aktivitas jaringan secara real-time.

### Amazon SNS (Simple Notification Service)

Digunakan untuk mengirim notifikasi email secara otomatis ketika alarm CloudWatch aktif.

### AWS IAM

Digunakan untuk mengatur hak akses dan keamanan layanan AWS yang digunakan pada proyek.

### Security Group

Digunakan untuk mengatur lalu lintas jaringan yang diperbolehkan menuju instance EC2.

### Terraform

Digunakan sebagai pendekatan Infrastructure as Code (IaC) untuk mengotomatisasi pembuatan resource jaringan seperti VPC, subnet, route table, dan Internet Gateway.

## Arsitektur Sistem

Sistem menggunakan arsitektur cloud dengan alur sebagai berikut:

User → Browser → Amazon EC2 (Node.js & Express.js) → Amazon DynamoDB

CloudWatch memonitor resource EC2 dan mengirim alarm melalui Amazon SNS ketika terjadi kondisi tertentu.

## Implementasi Infrastructure as Code

Selain konfigurasi manual melalui AWS Console, proyek ini juga menerapkan Infrastructure as Code menggunakan Terraform untuk provisioning infrastruktur jaringan AWS.

Resource yang berhasil dibuat menggunakan Terraform meliputi:

* Virtual Private Cloud (VPC)
* Public Subnet
* Private Subnet
* Internet Gateway
* Route Table
* Route Table Association

Implementasi ini membantu mengotomatisasi proses deployment infrastruktur sehingga lebih konsisten, terdokumentasi, dan mudah direplikasi.

## Struktur Repository

```text
cloud-url-shortener
│
├── terraform
│   ├── main.tf
│   ├── outputs.tf
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

## Tantangan yang Dihadapi

Selama pengembangan proyek, tim menghadapi beberapa kendala, di antaranya:

* Error saat menjalankan terraform init, terraform plan, dan terraform apply.
* Konfigurasi kredensial AWS yang belum sesuai.
* Kesalahan konfigurasi file Terraform yang menyebabkan deployment gagal.
* Integrasi antar layanan AWS yang memerlukan proses debugging dan pengujian berulang.

Kendala tersebut berhasil diatasi melalui evaluasi konfigurasi Terraform, perbaikan kredensial AWS, serta pengujian ulang hingga proses provisioning infrastruktur dapat berjalan dengan baik.

## Lesson Learned

Melalui proyek ini, tim memperoleh pemahaman mengenai:

* Implementasi layanan cloud AWS pada aplikasi nyata.
* Penggunaan Terraform sebagai Infrastructure as Code.
* Deployment aplikasi berbasis cloud.
* Monitoring dan alerting menggunakan CloudWatch dan SNS.
* Pentingnya keamanan dan manajemen akses pada lingkungan cloud.

## Anggota Tim

**Kelompok 14**

* Naisya Mustika (2330205030050)
* Yiyin Febriani (2330205030064)
* Andhara Ester Carlony (2330305030080)
* Adella Ananda Putri (2330305030102)

## Institusi

Jurusan Teknik Informatika
Fakultas Teknik
Universitas Palangka Raya
2026
