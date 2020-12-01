import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {HomeComponent} from './home/home.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {SearchComponent} from './search/search.component';
import {SearchDetailsComponent} from './search-details/search-details.component';
import {MovieListComponent} from './movie-list/movie-list.component';

const routes: Routes = [
  {path: 'quizzes', component: QuizzesComponent},
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search/:searchText', component: SearchComponent},
  {path: 'details/:movieID', component: SearchDetailsComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent},
  {path: 'movielist', component: MovieListComponent},

  // {path: 'courses', component: CourseListComponent},
  // {path: 'details/:courseId', component: CourseViewerComponent},
  // {path: 'details/:courseId/modules/:moduleId', component: CourseViewerComponent},
  // {path: 'details/:courseId/modules/:moduleId/lessons/:lessonId', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
