import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


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
  }
}
