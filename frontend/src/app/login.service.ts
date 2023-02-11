import { Injectable } from '@angular/core';
import { Profile } from './profile';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  profile: Profile | undefined | null = null;

  constructor() {}

  addProfile(profile: Profile) {
    this.profile = profile;
  }

  getProfile() {
    return this.profile;
  }
}
