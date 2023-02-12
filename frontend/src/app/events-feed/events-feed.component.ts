import { Component } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-feed',
  templateUrl: './events-feed.component.html',
  styleUrls: ['./events-feed.component.css']
})
export class EventsFeedComponent {

  constructor(
    private eventsService: EventsService,
  ) {} 
 
  getPosts(){
    return this.eventsService.getEventsPosts()
  }
}
