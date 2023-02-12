import { Injectable } from '@angular/core';
import { Post } from './post'

@Injectable({
  providedIn: 'root'
})
export class EventsService {

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
