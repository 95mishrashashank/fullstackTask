import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './post.controller';
import { PostsService } from './post.service';
import { Post, PostSchema } from './schema/post.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
