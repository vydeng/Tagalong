import { Injectable } from '@angular/core';
import { Post } from './post'
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class ErrandsService {

  sam = new Profile("Sam", "contact", "bio"); 
  bella = new Profile("Bella", "bellaswan@gmail.com", "i am from the pacific northwest");
  // chad = new Profile("chad", "snap chad69_420", "in a frat");

  post_one = new Post(this.sam, "do you need a ride to trader joes?", "today at 7pm bc i love going right before close", "i have 4 more seats in my carrr", "i will come pick u up if u live like within a 10 min drive of campus and let me be on aux");
  post_two = new Post(this.bella, "need a ride to costco", "whenever", "whoever fits in ut car ? its ur car so its up to u", "i have a costco card but no car, u can use my card if u transport me there :)");

  errandsPosts: Post[] = [this.post_one, this.post_two];
  constructor() { }

  addPost(post: Post){
    this.errandsPosts.push(post);
    console.log(post.title);
  }

  getErrandsPosts(){
    return this.errandsPosts;
  }
}

