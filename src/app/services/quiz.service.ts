import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor(private http: HttpClient) {}

  saveQuiz(quiz: Quiz) {
    this.http
      .post<any>('http://localhost:3000/quizes', JSON.stringify(quiz), {
        headers: {
          'Content-Type': 'application/json',
        },
        observe: 'response',
        withCredentials: true,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  saveQuestions(questions: Question[]) {
    this.http
      .post<any>(
        'http://localhost:3000/quizes/questions',
        JSON.stringify(questions),
        {
          headers: {
            'Content-Type': 'application/json',
          },
          observe: 'response',
          withCredentials: true,
        }
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
