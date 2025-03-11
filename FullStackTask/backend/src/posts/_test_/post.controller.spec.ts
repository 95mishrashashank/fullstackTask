import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from '../post.controller';
import { PostsService } from '../posts.service';

describe('PostsController', () => {
  let postsController: PostsController;
  let postsService: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [
        {
          provide: PostsService,
          useValue: {
            createPost: jest.fn(),
            getAllPosts: jest.fn(),
          },
        },
      ],
    }).compile();

    postsController = module.get<PostsController>(PostsController);
    postsService = module.get<PostsService>(PostsService);
  });

  it('should create a post', async () => {
    const postDto = { title: 'Test Post', content: 'Hello World' };
    jest.spyOn(postsService, 'createPost').mockResolvedValue(postDto);

    const result = await postsController.createPost(postDto);
    expect(result).toEqual(postDto);
  });

  it('should fetch all posts', async () => {
    const mockPosts = [{ title: 'Test', content: 'Content' }];
    jest.spyOn(postsService, 'getAllPosts').mockResolvedValue(mockPosts);

    const result = await postsController.getAllPosts();
    expect(result).toEqual(mockPosts);
  });

  it('should throw error for unauthorized post', async () => {
    jest.spyOn(postsService, 'createPost').mockRejectedValue(new Error('Unauthorized'));

    await expect(postsController.createPost({})).rejects.toThrow('Unauthorized');
  });
});
