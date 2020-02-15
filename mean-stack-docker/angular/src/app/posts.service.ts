import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  // Link to our api, pointing to localhost
  API = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get(`${this.API}/api/posts`);
  }
  createPost(data) {
    return this.http.post(`${this.API}/api/posts`,  data);
  }
  upVote(id, votes) {
    return this.http.put(`${this.API}/api/posts/${id}/upvote`, {votes: votes});
  }
  downVote(id, votes) {
    return this.http.put(`${this.API}/api/posts/${id}/downvote`, {votes: votes});
  }
  deletePost(id) {
    return this.http.delete(`${this.API}/api/posts/${id}`);
  }
}
