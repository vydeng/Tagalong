import { Injectable } from '@angular/core';
import { Post } from './post'
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  bella = new Profile("Bella", "bellaswan@gmail.com", "i am from the pacific northwest");
  // chad = new Profile("chad", "snap chad69_420", "in a frat");

  // post_two = new Post(this.bella, "looking for 2 people to join for valentine's van gogh exhibit. i have a car and the tickets", "valentines @ 7", "2", "my throuple broke up yesterday and now i have 2 extra tickets to the Van Gogh valentine's exhibit in raleigh. come! it will be fun if we decide it will be. one person bring snacks one person bring drinks x");

  eventsPosts: Post[] = [];
  constructor() { }

  addPost(post: Post){
    this.eventsPosts.push(post);
    console.log(post.title);
  }

  getEventsPosts(){
    return this.eventsPosts;
  }
}
