import { Component } from '@angular/core';
import { AcademicService } from '../academic.service';

@Component({
  selector: 'app-academic-feed',
  templateUrl: './academic-feed.component.html',
  styleUrls: ['./academic-feed.component.css']
})
export class AcademicFeedComponent {

  constructor(
    private academicService: AcademicService,
  ) {}

  getPosts(){
    return this.academicService.getAcademicPosts()
  }
}
