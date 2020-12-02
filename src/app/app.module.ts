import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import {FormsModule} from '@angular/forms';
import {CourseServiceClient} from './services/CourseServiceClient';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { HomeComponent } from './home/home.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { RegisterComponent } from './register/register.component';
import { UserServiceClient} from './services/UserServiceClient';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './search/search.component';
import {OMDBServiceClient} from './services/OMDBServiceClient';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieServiceClient} from './services/MovieServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseViewerComponent,
    HomeComponent,
    ModuleListComponent,
    LessonTabsComponent,
    QuizzesComponent,
    RegisterComponent,
    ProfileComponent,
    LoginComponent,
    NavBarComponent,
    SearchComponent,
    SearchDetailsComponent,
    MovieListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CourseServiceClient,
    UserServiceClient,
    OMDBServiceClient,
    MovieServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
