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
    private webSocketService: WebsocketService
  ) {}

  quizCode: string = '';
  userName: string = '';

  enterGame() {
    console.log(this.userName);
    this.webSocketService.emit('userName', this.userName);
  }

  ngOnInit(): void {
    this.webSocketService.listen('testEvent').subscribe((data) => {
      console.log(data);
    });
  }
}
