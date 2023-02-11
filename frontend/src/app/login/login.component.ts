import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Profile } from '../profile';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
  submitted = false;

  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router, 
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      contact: ['', Validators.required],
      bio: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginService.addProfile(new Profile(this.form.value.name, this.form.value.contact, this.form.value.bio));
    this.router.navigate([`../`], { relativeTo: this.route });
  }
} 
