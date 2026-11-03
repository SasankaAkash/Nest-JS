import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    login() {
        return { message: 'Login successful' };
    }
    signup() {
        return { message: 'Signup successful' };
    }
}