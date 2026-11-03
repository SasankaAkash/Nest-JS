import { Controller } from "@nestjs/common";
import { UserService } from "./user.module.service";
import { Post } from "@nestjs/common";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('login')
    login() {
        return this.userService.login();
    }

    @Post('signup')
    signup() {
        return this.userService.signup();
    }
}