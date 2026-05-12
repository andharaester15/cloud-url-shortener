output "vpc_id" {
value = aws_vpc.tf_vpc.id
}

output "public_subnet_id" { value = aws_subnet.public.id
}
