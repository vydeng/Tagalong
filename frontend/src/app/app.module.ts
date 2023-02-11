import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AcademicFeedComponent } from './academic-feed/academic-feed.component';
import { RouterModule } from '@angular/router';
import { AcademicPostComponent } from './academic-post/academic-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcademicFeedComponent,
    AcademicPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'academicFeed', component: AcademicFeedComponent },
      { path: 'academicPost', component: AcademicPostComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
