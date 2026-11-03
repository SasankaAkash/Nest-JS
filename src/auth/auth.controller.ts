import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { Post } from "@nestjs/common";

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login() {
    return this.authService.login();
  }

  @Post('signup')
  signup() {
    return this.authService.signup();
  }


}