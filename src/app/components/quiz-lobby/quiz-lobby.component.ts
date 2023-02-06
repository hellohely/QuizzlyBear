import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-lobby',
  templateUrl: './quiz-lobby.component.html',
})
export class QuizLobbyComponent implements OnInit {
  constructor(
    private websocketService: WebsocketService,
    private quizService: QuizService,
    private router: Router
  ) {}

  players: User[] = [];
  quizHost: User[] = [];
  room: string = '';
  quizName: string = '';
  quizCreator: string = '';

  userId = this.websocketService.socketId;
  userIsHost = false;

  ngOnInit(): void {
    this.websocketService.listen('roomUsers').subscribe((data: any) => {
      this.players = [];
      this.quizHost = [];
      this.room = data.room;

      let users: any[] = data.users;

      this.quizService.getQuiz(data.room).subscribe((response) => {
        this.quizName = response.body.quizName;
        this.quizCreator = response.body.quizCreator;
      });

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

      this.websocketService.listen('redirectUsers').subscribe((data: any) => {
        if (this.userIsHost) {
          this.router.navigate(['/hostquiz']);
        } else {
          this.router.navigate(['/playquiz']);
        }
      });
    });
  }

  leaveQuiz() {
    this.router.navigate(['../']);
  }

  startQuiz() {
    this.websocketService.emit('redirect', this.room);
  }
}
