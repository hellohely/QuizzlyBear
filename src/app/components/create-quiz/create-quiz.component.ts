import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
})
export class CreateQuizComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  questions = [1];

  quiz: Quiz = {
    quizName: '',
    quizCreator: '',
    quizQuestions: [],
  };

  addQuestion(array: number[]) {
    const nextElement = array.length + 1;

    // Use the push() method to add the new element to the end of the array
    array.push(nextElement);
  }

  saveQuiz(form: NgForm) {
    console.log(this.quiz.quizCreator);
  }

  ngOnInit(): void {}
}
