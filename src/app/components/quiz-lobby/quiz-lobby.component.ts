import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-quiz-lobby',
  templateUrl: './quiz-lobby.component.html',
})
export class QuizLobbyComponent implements OnInit {
  constructor(private websocketService: WebsocketService) {}

  players: User[] = [];
  quizHost: User[] = [];
  room: string = '';

  userId = this.websocketService.socketId;
  currentUser = this.quizHost.find((user) => user.id === this.userId);
  userIsHost = false;

  ngOnInit(): void {
    this.websocketService.listen('roomUsers').subscribe((data: any) => {
      console.log('roomUsers: ', data);
      this.players = [];
      this.quizHost = [];
      this.room = data.room;

      let users: any[] = data.users;

      //Sorts users into players and host
      users.forEach((user) => {
        if (user.isHost) {
          this.quizHost.push(user);
        } else {
          this.players.push(user);
        }
      });
      //Checks if this user is the host
      this.userIsHost = this.quizHost.some((user) => user.id === this.userId);
    });
  }
}
