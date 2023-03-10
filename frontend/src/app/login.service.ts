import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  profile: Profile = new Profile("John", "Smith", "Hello");

  constructor() {}

  addProfile(profile: Profile) {
    this.profile = profile;
  }

  getProfile() {
    return this.profile;
  }
}
