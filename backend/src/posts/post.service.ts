import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  private posts = [];

  create(post: any) {
    const newPost = { id: this.posts.length + 1, ...post };
    this.posts.push(newPost);
    return newPost;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: number) {
    return this.posts.find(post => post.id === id);
  }
}