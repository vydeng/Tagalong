import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcademicService } from '../academic.service';
import { Post } from '../post';


@Component({
  selector: 'app-academic-post',
  templateUrl: './academic-post.component.html',
  styleUrls: ['./academic-post.component.css']
})
export class AcademicPostComponent {
  form!: FormGroup;
  submitted=false;

  constructor(
    private formBuilder: FormBuilder,
    private academicService: AcademicService,
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
    this.academicService.addPost(new Post(this.form.value.title, this.form.value.time, this.form.value.people, this.form.value.description));
    window.alert(`post submitted`);
    this.form.reset();
    this.submitted=false;

  }
}
