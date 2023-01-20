import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-quiz-lobby',
  templateUrl: './quiz-lobby.component.html',
})
export class QuizLobbyComponent implements OnInit {
  constructor(private webSocketService: WebsocketService) {}

  ngOnInit(): void {
    this.webSocketService.listen('testEvent').subscribe((data) => {
      console.log(data);
    });
  }
}
