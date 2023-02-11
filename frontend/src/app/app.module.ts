import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcademicFeedComponent } from './academic-feed/academic-feed.component';
import { RouterModule } from '@angular/router';
import { AcademicPostComponent } from './academic-post/academic-post.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcademicFeedComponent,
    AcademicPostComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'academicFeed', component: AcademicFeedComponent },
      { path: 'academicPost', component: AcademicPostComponent },
      { path: 'login', component: LoginComponent},
      { path: 'profile', component: ProfileComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
