import { Injectable } from '@angular/core';
import { Post } from './post'
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {

  academicPosts: Post[] = [];
  constructor() { }

  addPost(post: Post){
    this.academicPosts.push(post);
    console.log(post.title);
  }

  getAcademicPosts(){
    return this.academicPosts;
  }
}
