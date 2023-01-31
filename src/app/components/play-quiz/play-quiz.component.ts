import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss'],
})
export class PlayQuizComponent implements OnInit {
  answerOptions: any;

  constructor(private websocketService: WebsocketService) {}

  userAnswer(isAnswer: boolean) {
    if (isAnswer === true) {
      this.websocketService.getPoint();
    }
  }

  ngOnInit(): void {
    this.websocketService.listen('answerOptions').subscribe((data: any) => {
      this.answerOptions = data;
      console.log(this.answerOptions);
    });
  }
}
