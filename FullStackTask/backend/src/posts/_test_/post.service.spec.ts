import { PostsService } from '../posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  it('should create a post', async () => {
    const postDto = { title: 'Test Post', content: 'Hello World' };
    const result = await postsService.createPost(postDto);

    expect(result).toEqual(postDto);
  });

  it('should throw error if no title', async () => {
    await expect(postsService.createPost({})).rejects.toThrow('Title is required');
  });

  it('should fetch all posts', async () => {
    const result = await postsService.getAllPosts();
    expect(result).toEqual([]);
  });
});
