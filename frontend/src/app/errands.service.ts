import { Injectable } from '@angular/core';
import { Post } from './post'

@Injectable({
  providedIn: 'root'
})
export class ErrandsService {

  errandsPosts: Post[] = [];
  constructor() { }

  addPost(post: Post){
    this.errandsPosts.push(post);
    console.log(post.title);
  }

  getErrandsPosts(){
    return this.errandsPosts;
  }
}

