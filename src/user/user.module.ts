import { Module } from '@nestjs/common';
import { UserController } from './user.module.controller';
import { UserService } from './user.module.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
