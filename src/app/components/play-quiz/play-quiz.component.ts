import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShuffleService } from 'src/app/services/shuffle.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss'],
})
export class PlayQuizComponent implements OnInit {
  answerOptions: any[] = [];

  constructor(
    private websocketService: WebsocketService,
    private shuffleService: ShuffleService,
    private router: Router
  ) {}

  isAnswered = false;

  userAnswer(isAnswer: boolean) {
    this.isAnswered = true;

    this.answerOptions.forEach((answerOption) => {
      answerOption.clicked = true;
    });

    if (isAnswer === true) {
      this.websocketService.getPoint();
    }
  }

  ngOnInit(): void {
    this.websocketService.listen('answerOptions').subscribe((data: any) => {
      let shuffledAnswerOptions = this.shuffleService.shuffle(data);
      this.answerOptions = shuffledAnswerOptions;
      this.isAnswered = false;
    });

    this.websocketService.listen('redirectUsers').subscribe((data: any) => {
      this.router.navigate(['/scoreboard']);
    });
  }
}
