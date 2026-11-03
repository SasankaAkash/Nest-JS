import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {
    return { message: 'Login successful' };
  }

  signup() {
    return { message: 'Signup successful' };
  }
}