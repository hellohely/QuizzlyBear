import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  saveQuiz(quiz: Quiz) {
    return this.http.post<any>(
      'http://localhost:3000/quizes',
      JSON.stringify(quiz),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        observe: 'response',
        withCredentials: true,
      }
    );
  }

  saveQuestions(questions: Question[]) {
    return this.http.post<any>(
      'http://localhost:3000/quizes/questions',
      JSON.stringify(questions),
      {
        headers: {
          'Content-Type': 'application/json',
        },
        observe: 'response',
        withCredentials: true,
      }
    );
  }

  getQuiz(id: string) {
    return this.http.get<any>('http://localhost:3000/quizes/quiz', {
      headers: {
        'Content-Type': 'application/json',
      },
      observe: 'response',
      withCredentials: true,
      params: {
        id: id,
      },
    });
  }

  getQuestions(questionIds: any[]) {
    return this.http.get<any>('http://localhost:3000/quizes/questions', {
      headers: {
        'Content-Type': 'application/json',
      },
      observe: 'response',
      withCredentials: true,
      params: {
        ids: JSON.stringify(questionIds),
      },
    });
  }
}
