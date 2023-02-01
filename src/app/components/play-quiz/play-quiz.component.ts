import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss'],
})
export class PlayQuizComponent implements OnInit {
  answerOptions: any;

  constructor(
    private websocketService: WebsocketService,
    private router: Router
  ) {}

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

    this.websocketService.listen('redirectUsers').subscribe((data: any) => {
      this.router.navigate(['/scoreboard']);
    });
  }
}
