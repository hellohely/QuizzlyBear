import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-quiz-lobby',
  templateUrl: './quiz-lobby.component.html',
})
export class QuizLobbyComponent implements OnInit {
  constructor(private websocketService: WebsocketService) {}

  // userName: any = '';
  // quizId: any = '';
  users: any = [];

  ngOnInit(): void {
    // this.websocketService.getUserName();
    // this.websocketService.listen('setUserName').subscribe((data) => {
    //   console.log(data);
    //   this.userName = data;
    // });

    this.websocketService.listen('roomUsers').subscribe((data: any) => {
      console.log('roomUsers: ', data);
      this.users = data.users;
    });
  }
}
