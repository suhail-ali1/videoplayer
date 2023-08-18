import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskCommentsComponent } from './task-comments/task-comments.component';
import { LoginComponent } from './login/login.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { TamilComponent } from './tamil/tamil.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskCommentsComponent,
    LoginComponent,
    AccessDeniedComponent,
    TamilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
