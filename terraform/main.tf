provider "aws" {
region = "ap-southeast-1"
}

# ====================== # VPC
# ======================
resource "aws_vpc" "tf_vpc" { cidr_block	= "10.1.0.0/16" enable_dns_hostnames = true enable_dns_support = true

tags = {
Name = "vpc-url-shortener-terraform"
}
}

# ======================
# Subnet Public
# ======================
resource "aws_subnet" "public" { vpc_id	= aws_vpc.tf_vpc.id
cidr_block	= "10.1.1.0/24" map_public_ip_on_launch = true

tags = {
Name = "subnet-public-terraform"
}
}

# ======================
# Subnet Private
# ======================
resource "aws_subnet" "private" { vpc_id	= aws_vpc.tf_vpc.id cidr_block = "10.1.2.0/24"

tags = {
Name = "subnet-private-terraform"
}
}

# ======================
resource "aws_internet_gateway" "igw" { vpc_id = aws_vpc.tf_vpc.id
tags = {
Name = "igw-terraform"
}
}
# ======================
# Route Table
# ======================
resource "aws_route_table" "public_rt" { vpc_id = aws_vpc.tf_vpc.id
route {
cidr_block = "0.0.0.0/0"
gateway_id = aws_internet_gateway.igw.id
}
tags = {
Name = "rt-public-terraform"
}
}
# ====================== # Associate RT ke Subnet Public # ======================
resource "aws_route_table_association" "assoc" { subnet_id	= aws_subnet.public.id route_table_id = aws_route_table.public_rt.id
}

# Internet Gateway
# ======================
