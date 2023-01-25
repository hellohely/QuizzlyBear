import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss'],
})
export class PlayQuizComponent implements OnInit {
  questionData: any;

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.listen('questionData').subscribe((data: any) => {
      this.questionData = data;
    });
  }
}
