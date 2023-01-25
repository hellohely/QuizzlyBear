import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-host-quiz',
  templateUrl: './host-quiz.component.html',
  styleUrls: ['./host-quiz.component.scss'],
})
export class HostQuizComponent implements OnInit {
  roomId = '';
  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.emit('getQuestionData', this.roomId);
  }
}
