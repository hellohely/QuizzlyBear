import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateQuizComponent } from './components//create-quiz/create-quiz.component';
import { HostQuizComponent } from './components/host-quiz/host-quiz.component';
import { HowToComponent } from './components/how-to/how-to.component';
import { JoinQuizComponent } from './components/join-quiz/join-quiz.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PlayQuizComponent } from './components/play-quiz/play-quiz.component';
import { QuizLobbyComponent } from './components/quiz-lobby/quiz-lobby.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'createquiz', component: CreateQuizComponent },
  { path: 'joinquiz', component: JoinQuizComponent },
  { path: 'quizlobby', component: QuizLobbyComponent },
  { path: 'playquiz', component: PlayQuizComponent },
  { path: 'hostquiz', component: HostQuizComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: 'howto', component: HowToComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
