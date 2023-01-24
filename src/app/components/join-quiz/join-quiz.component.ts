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

  quizId: string = '';
  userName: string = '';

  enterGame() {
    this.webSocketService.emit('userName', this.userName);
    this.webSocketService.emit('join', this.quizId);
    this.router.navigate(['/quizlobby']);
  }

  ngOnInit(): void {
    // this.webSocketService.listen('testEvent').subscribe((data) => {
    //   console.log(data);
    // });
  }
}
