# LocalEats -- Boston
A website to search and save your favorite movies. 

## View Deployed Website on Heroku
http://movie-match-angular.herokuapp.com/

File Structure
This website is created as a single page application. Components are rendered as they are called.

Components Directory : Holds the HTML, logic of the components, and styling for each corresponding component. This is found in src > app 

Website Capbilities: create a user profile, sign in and sign out of a profile, search IMDB's database of movies, save movie objects to your user profile, and 
fetch your list of favorited movies  

Other Features: Conditionally renders different home page and navigation bar depending on type on if the user is signed in or a guest.
And conditionally renders components on the homepage and navigation bar based on the type of user, administrative user vs. basic user. 
The administrative user has additional rights to view profile information about all other users and is allowed to add/edit movie 
titles on the home page from the UI. 

Full Documentation : https://www.notion.so/cs5610-collab-submissionForm-fdde9ccac5f04f97bebaf4057100042f


## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.4.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
