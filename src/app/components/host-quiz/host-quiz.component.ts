import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';
import { QuizService } from 'src/app/services/quiz.service';
import { WebsocketService } from 'src/app/services/websocket.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-host-quiz',
  templateUrl: './host-quiz.component.html',
  styleUrls: ['./host-quiz.component.scss'],
})
export class HostQuizComponent implements OnInit {
  roomId = this.websocketService.roomId;
  questionIds: string[] = [];
  questions: Question[] = [];
  currentQuestionIndex = 0;
  currentQuestion: any;
  youtubeLink: SafeResourceUrl;

  constructor(
    private websocketService: WebsocketService,
    private quizService: QuizService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {
    this.youtubeLink = this.sanitizer.bypassSecurityTrustResourceUrl('');
  }

  ngOnInit(): void {
    this.quizService.getQuiz(this.roomId).subscribe((response) => {
      this.questionIds = response.body.quizQuestions;
      this.quizService.getQuestions(this.questionIds).subscribe((response) => {
        this.questions = response.body;
        this.currentQuestion = this.questions[this.currentQuestionIndex];
        this.youtubeLink = this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/' +
            this.currentQuestion.link +
            '?&autoplay=1'
        );
        this.websocketService.emit(
          'answerOptions',
          this.currentQuestion.answerOptions
        );
      });
    });

    this.websocketService.listen('roomUsers').subscribe((data: any) => {
      console.log(data);
    });

    this.websocketService.listen('redirectUsers').subscribe((data: any) => {
      console.log('Jag har hört redirectUsers från servern!');
      //Bug: Den navigerar bara till routern om spelarna inte har tryckt på rätt svar. Raden ovanför loggas oavsett.
      this.router.navigate(['/scoreboard']);
      console.log('Jag är efter navigate raden');
    });
  }

  showNextQuestion() {
    if (this.currentQuestionIndex + 1 >= this.questions.length) {
      this.websocketService.emit('redirect', this.roomId);
      console.log('Jag har skickat redirect till servern!');

      return;
    }

    this.currentQuestionIndex++;
    this.currentQuestion = this.questions[this.currentQuestionIndex];
    this.websocketService.emit(
      'answerOptions',
      this.currentQuestion.answerOptions
    );
  }
}
