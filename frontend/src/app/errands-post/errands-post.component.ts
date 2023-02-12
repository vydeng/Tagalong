import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ErrandsService } from '../errands.service';
import { Post } from '../post';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-errands-post',
  templateUrl: './errands-post.component.html',
  styleUrls: ['./errands-post.component.css']
})
export class ErrandsPostComponent {
  form!: FormGroup;
  submitted=false;

  constructor(
    private formBuilder: FormBuilder,
    private errandsService: ErrandsService,
    private loginService: LoginService,
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
    this.errandsService.addPost(new Post(this.loginService.getProfile(), this.form.value.title, this.form.value.time, this.form.value.people, this.form.value.description));
    window.alert(`post submitted`);
    this.form.reset();
    this.submitted=false;

  }
}
