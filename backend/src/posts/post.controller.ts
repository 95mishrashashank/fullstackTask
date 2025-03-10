import { Controller, Post, Get, Param, Body } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Post()
  create(@Body() body: any) {
    return { message: 'Post created successfully' };
  }

  @Get()
  findAll() {
    return [{ id: 1, title: 'First Post' }];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id, title: `Post with ID ${id}` };
  }
}
