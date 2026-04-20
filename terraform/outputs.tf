output "server1_public_ip" {
  value = aws_instance.server1.public_ip
}

output "server2_private_ip" {
  value = aws_instance.server2.private_ip
}
