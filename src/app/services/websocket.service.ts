import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socket: any;
  room: string = '';
  readonly uri: string = 'http://localhost:3000/';

  options = {
    transports: ['websocket'],
    upgrade: false,
    query: {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:4200',
      },
    },
  };

  constructor() {
    this.socket = io(this.uri, this.options);
  }

  get socketId() {
    return this.socket.id;
  }

  get roomId() {
    return this.room;
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  join(quizId: string, username: string, isHost: boolean) {
    this.room = quizId;
    this.socket.emit('join', { quizId, username, isHost });
  }

  getPoint() {
    this.socket.emit('getPoint', this.socket.id);
  }
}
