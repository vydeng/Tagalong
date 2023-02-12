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
import { ErrandsFeedComponent } from './errands-feed/errands-feed.component';
import { EventsFeedComponent } from './events-feed/events-feed.component';
import { ErrandsPostComponent } from './errands-post/errands-post.component';
import { EventsPostComponent } from './events-post/events-post.component';
import { SamComponent } from './sam/sam.component';
import { sample } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcademicFeedComponent,
    AcademicPostComponent,
    LoginComponent,
    ProfileComponent,
    ErrandsFeedComponent,
    EventsFeedComponent,
    ErrandsPostComponent,
    EventsPostComponent,
    SamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'academicFeed', component: AcademicFeedComponent },
      { path: 'academicPost', component: AcademicPostComponent },
      { path: 'home', component: HomeComponent},
      { path: 'profile', component: ProfileComponent },
      { path: 'errandsFeed', component: ErrandsFeedComponent },
      { path: 'errandsPost', component: ErrandsPostComponent },
      { path: 'eventsFeed', component: EventsFeedComponent },
      { path: 'eventsPost', component: EventsPostComponent },
      { path: 'post55', component: SamComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
