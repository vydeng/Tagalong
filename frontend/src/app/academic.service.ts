import { Injectable } from '@angular/core';
import { Post } from './post'
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {

  sam = new Profile("sam", "contact", "bio"); 
  bella = new Profile("bella", "bellaswan@gmail.com", "i am from the pacific northwest");

  post_one = new Post(this.sam, "study for comp 311 midterm", "today any time after 3pm", "whoever wants to come", "i can get us all coffee!");
  post_two = new Post(this.bella, "anybody still need a pearl hacks team?", "feb 11 @ 11am", "1", "me and 2 friends need a fourth person for our pearl hacks team! we know html and will be nice to u");

  academicPosts: Post[] = [this.post_one, this.post_two];
  constructor() { }

  addPost(post: Post){
    this.academicPosts.push(post);
    console.log(post.title);
  }

  getAcademicPosts(){
    return this.academicPosts;
  }
}
