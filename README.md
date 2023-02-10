# QuizzlyBear - Create and play music quizzes with your friends!

## Deployment

Client:
https://quizzlybear.onrender.com/

Server*:
https://musicquizapi.onrender.com/

*The server is in a separate repository and currently private

## Background

QuizzlyBear is a beta website created as a degree project by [@hellohely](https://github.com/hellohely), a Frontend Developer student at Medieinstitutet. It allows you to create and play your own music quizzes with friends.

The idea for the music quiz web page was inspired by the desire to create a more engaging and interactive experience for quiz players. Traditional quizzes using pen and paper can be cumbersome and not as engaging as they could be. The music quiz web page addresses these issues by providing a platform that allows players to participate in quizzes using their own devices and in real-time. 

With the ability to customize their own quizzes and use YouTube videos, users have endless possibilities for the types of quizzes they can create and play. This beta version of the app aims to provide a fun and interactive way for users to host music quizzes at parties or with friends.

## Tech Stack

The application is built in **TypeScript** using **Angular** framework styled with **SCSS** and with real-time communication using the **Socket.io** library. The application has a **Node.js** backend using the **Express** framework and the applications data is stored in a **MongoDB** database.

NPM Packages installed:
nanoid, socket.io

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Collaboration

The website is currently in beta version only and not a finished product. Feel free to check out the list of issues and see if you would like to contribute!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
