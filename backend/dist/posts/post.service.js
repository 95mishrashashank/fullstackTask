"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
class PostsService {
    constructor() {
        this.posts = [];
    }
    create(post) {
        this.posts.push(post);
    }
    findOne(id) {
        return this.posts.find((post) => post.id === id);
    }
}
exports.PostsService = PostsService;
