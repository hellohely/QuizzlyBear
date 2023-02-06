import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  socket: any;
  room: string = '';
  readonly uri: string = environment.apiUrl;

  options = {
    transports: ['websocket'],
    upgrade: false,
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

  disconnect() {
    this.socket.disconnect();
  }

  getPoint() {
    this.socket.emit('getPoint', this.socket.id);
  }
}
