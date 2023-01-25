import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-join-quiz',
  templateUrl: './join-quiz.component.html',
})
export class JoinQuizComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private webSocketService: WebsocketService
  ) {}

  quizIdInput: string = '';
  usernameInput: string = '';

  enterQuiz(isHost: boolean) {
    let quizId = this.quizIdInput;
    let username = this.usernameInput;
    this.webSocketService.join(quizId, username, isHost);
    this.router.navigate(['/quizlobby']);
  }

  ngOnInit(): void {}
}
