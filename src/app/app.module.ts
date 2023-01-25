import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { JoinQuizComponent } from './components/join-quiz/join-quiz.component';
import { QuizLobbyComponent } from './components/quiz-lobby/quiz-lobby.component';
import { HttpClientModule } from '@angular/common/http';
import { PlayQuizComponent } from './components/play-quiz/play-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuizComponent,
    LandingPageComponent,
    JoinQuizComponent,
    QuizLobbyComponent,
    PlayQuizComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
