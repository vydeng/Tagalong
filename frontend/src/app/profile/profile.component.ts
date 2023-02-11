import { Component } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  constructor(private loginService: LoginService) {}

  getProfile() {
    return this.loginService.getProfile();
}

}
