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
import { HostQuizComponent } from './components/host-quiz/host-quiz.component';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { HowToComponent } from './components/how-to/how-to.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuizComponent,
    LandingPageComponent,
    JoinQuizComponent,
    QuizLobbyComponent,
    PlayQuizComponent,
    HostQuizComponent,
    ScoreboardComponent,
    HowToComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
