interface Post {
  id: string;
  title: string;
  content: string;
}

export class PostsService {
  private posts: Post[] = [];

  create(post: Post) {
    this.posts.push(post);
  }

  findOne(id: string): Post | undefined {
    return this.posts.find((post) => post.id === id);
  }
}
