import { Component } from '@angular/core';
import { ErrandsService } from '../errands.service';

@Component({
  selector: 'app-errands-feed',
  templateUrl: './errands-feed.component.html',
  styleUrls: ['./errands-feed.component.css']
})
export class ErrandsFeedComponent {

  constructor(
    private errandsService: ErrandsService,
  ) {}

  getPosts(){
    return this.errandsService.getErrandsPosts()
  }
}
