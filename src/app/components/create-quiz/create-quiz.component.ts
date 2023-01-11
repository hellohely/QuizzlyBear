import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { nanoid } from 'nanoid';
import { answerOption } from 'src/app/models/answerOption';
import { Question } from 'src/app/models/question';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
})
export class CreateQuizComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  quiz: Quiz = {
    quizName: '',
    quizCreator: '',
    quizQuestions: [],
  };

  questions: Question[] = [
    {
      questionId: nanoid(),
      questionString: '',
      link: '',
      answerOptions: [
        { answerId: nanoid(), answerString: '', isAnswer: true },
        { answerId: nanoid(), answerString: '', isAnswer: false },
        { answerId: nanoid(), answerString: '', isAnswer: false },
        { answerId: nanoid(), answerString: '', isAnswer: false },
      ],
    },
  ];

  // addQuestion(array: number[]) {
  //   const nextElement = array.length + 1;
  //   array.push(nextElement);
  // }

  saveQuiz() {
    console.log('Quiz: ', this.quiz);
    console.log('Questions: ', this.questions);

    this.questions.forEach((question) => {
      this.quiz.quizQuestions.push(question.questionId);
      console.log(this.quiz);
    });

    //For each question in questions, push question.id to quiz.quizQuestions array
  }

  ngOnInit(): void {}
}
