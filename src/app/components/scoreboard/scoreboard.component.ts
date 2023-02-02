import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss'],
})
export class ScoreboardComponent implements OnInit {
  constructor(
    private websocketService: WebsocketService,
    private router: Router
  ) {}

  players: User[] = [];

  ngOnInit(): void {
    this.websocketService.emit('getUsers', 'get');
    this.websocketService.listen('roomUsers').subscribe((data: any) => {
      this.players = [];
      let users = data.users;

      users.forEach((user: User) => {
        if (!user.isHost) {
          this.players.push(user);
        }
      });
      this.players.sort((a, b) => b.points - a.points);
    });
  }

  leaveQuiz() {
    this.router.navigate(['../']);
  }
}
