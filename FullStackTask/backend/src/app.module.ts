import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/post.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [AuthModule, PostsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/blog-app'),
    ConfigModule.forRoot({
    isGlobal: true, 
  }),],
}) 
export class AppModule {}