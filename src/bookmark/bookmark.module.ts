import { Module } from '@nestjs/common';
import { BookmarkController } from './bookmark.module.controller';
import { BookmarkService } from './bookmark.module.service';

@Module({
  controllers: [BookmarkController],
  providers: [BookmarkService],
})
export class BookmarkModule {}
