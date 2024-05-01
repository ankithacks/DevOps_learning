provider "aws" {
  region = "ap-south-1"
  access_key = ""
  secret_key = ""
}

resource "aws_instance" "server-in-terraform" {
  ami = "ami-0f58b397bc5c1f2e8"
  instance_type = "t2.micro"
}

# creating a VPC:-
resource "aws_vpc" "first-vpc" {
  cidr_block = "10.0.1.0/16"
  tags = {
    Name: "production-vpc"
  }
}

# subnet:-
resource "aws_subnet" "subnet-1" {
  vpc_id = aws_vpc.first-vpc.id
  cidr_block = "10.0.1.0/24"

  tags = {
    Name: "prod-subnet"
  }
}