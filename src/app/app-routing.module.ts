import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateQuizComponent } from './components//create-quiz/create-quiz.component';
import { JoinQuizComponent } from './components/join-quiz/join-quiz.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { QuizLobbyComponent } from './components/quiz-lobby/quiz-lobby.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'createquiz', component: CreateQuizComponent },
  { path: 'joinquiz', component: JoinQuizComponent },
  { path: 'quizlobby', component: QuizLobbyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
