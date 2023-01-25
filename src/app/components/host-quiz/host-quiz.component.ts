import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-host-quiz',
  templateUrl: './host-quiz.component.html',
  styleUrls: ['./host-quiz.component.scss'],
})
export class HostQuizComponent implements OnInit {
  roomId = '63c95ee10735c32367b07256';
  constructor(
    private websocketService: WebsocketService,
    private quizService: QuizService
  ) {}

  ngOnInit(): void {
    this.quizService.getQuiz(this.roomId);
  }
}
