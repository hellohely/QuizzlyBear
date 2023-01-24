import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-quiz-lobby',
  templateUrl: './quiz-lobby.component.html',
})
export class QuizLobbyComponent implements OnInit {
  constructor(private webSocketService: WebsocketService) {}

  userName: any = '';
  quizId: any = '';

  ngOnInit(): void {
    this.webSocketService.getUserName();
    this.webSocketService.listen('setUserName').subscribe((data) => {
      console.log(data);
      this.userName = data;
    });
  }
}
