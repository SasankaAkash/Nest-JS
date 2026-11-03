import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon2 from "argon2";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async signup(dto: AuthDto) {
    //genarate the password hash
    const hash = await argon2.hash(dto.password);
    //save the new user in the db
    const user = await this.prisma.user.create({
      data: {
        emai: dto.email,
        hash,
      },
      select: {
        id: true,
        emai: true,
        firstname: true,
        lastname: true,
      },
    });
    //return the saved user
    return { message: 'Signup successful', user };
  }
  login() {
    return { message: 'Login successful' };
  }

  
}