import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-quiz-lobby',
  templateUrl: './quiz-lobby.component.html',
})
export class QuizLobbyComponent implements OnInit {
  constructor(private websocketService: WebsocketService) {}

  users: any = [];

  ngOnInit(): void {
    this.websocketService.listen('roomUsers').subscribe((data: any) => {
      console.log('roomUsers: ', data);
      this.users = data.users;
    });
  }
}
