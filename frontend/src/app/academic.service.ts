import { Injectable } from '@angular/core';
import { Post } from './post'

@Injectable({
  providedIn: 'root'
})
export class AcademicService {

  academicPosts = Post[] = [];
  constructor() { }

  addPost(post: Post){
    this.academicPosts.push(post);
    console.log(academicPosts.title);

  }

  getAcademicPosts(){
    return this.academicPosts
  }
}
