import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-host-quiz',
  templateUrl: './host-quiz.component.html',
  styleUrls: ['./host-quiz.component.scss'],
})
export class HostQuizComponent implements OnInit {
  roomId = this.websocketService.roomId;
  questionIds = [];

  constructor(
    private websocketService: WebsocketService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizService.getQuiz(this.roomId).subscribe((response) => {
      this.questionIds = response.body.quizQuestions;
      console.log(this.questionIds);
      this.quizService.getQuestions(this.questionIds).subscribe((response) => {
        console.log(response);
      });
    });
  }
}
