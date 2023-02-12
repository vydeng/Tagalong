import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../events.service';
import { Post } from '../post';
import { LoginService } from '../login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-post',
  templateUrl: './events-post.component.html',
  styleUrls: ['./events-post.component.css']
})
export class EventsPostComponent {
  form!: FormGroup;
  submitted=false;

  constructor(
    private formBuilder: FormBuilder,
    private eventsService: EventsService,
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(){
    this.form=this.formBuilder.group({
      title:['', Validators.required],
      time: ['', Validators.required],
      people: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
    this.eventsService.addPost(new Post(this.loginService.getProfile(), this.form.value.title, this.form.value.time, this.form.value.people, this.form.value.description));
    //window.alert(`post submitted`);
    this.form.reset();
    this.submitted=false;
    this.router.navigate([`../eventsFeed`],{relativeTo: this.route});
  }
}
