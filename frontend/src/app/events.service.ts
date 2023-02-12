import { Injectable } from '@angular/core';
import { Post } from './post'
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  sam = new Profile("Sam", "contact", "bio"); 
  bella = new Profile("Bella", "bellaswan@gmail.com", "i am from the pacific northwest");
  // chad = new Profile("chad", "snap chad69_420", "in a frat");

  post_one = new Post(this.sam, "anyone going to see Etran De L'Air play Cat's Cradle Backroom", "April 3rd 7pm", "everyone !", "anybody else planning on going to this show? i bought a ticket bc i love them but don't know anyone else going and want a buddy <3");
  post_two = new Post(this.bella, "looking for 2 people to join for valentine's van gogh exhibit. i have a car and the tickets", "valentines @ 7", "2", "my throuple broke up yesterday and now i have 2 extra tickets to the Van Gogh valentine's exhibit in raleigh. come! it will be fun if we decide it will be. one person bring snacks one person bring drinks x");

  eventsPosts: Post[] = [this.post_one, this.post_two];
  constructor() { }

  addPost(post: Post){
    this.eventsPosts.push(post);
    console.log(post.title);
  }

  getEventsPosts(){
    return this.eventsPosts;
  }
}
