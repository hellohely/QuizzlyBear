import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { nanoid } from 'nanoid';
import { answerOption } from 'src/app/models/answerOption';
import { Question } from 'src/app/models/question';
import { Quiz } from 'src/app/models/quiz';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
})
export class CreateQuizComponent implements OnInit {
  youtubeLinks: SafeResourceUrl[] = [];
  showVideos: boolean[] = [];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private quizService: QuizService,
    private sanitizer: DomSanitizer
  ) {}

  extractYouTubeVideoId(url: string) {
    const regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return null;
    }
  }

  embedVideo(link: string, index: number) {
    let id = this.extractYouTubeVideoId(link);
    this.youtubeLinks.push(
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/' + id + '?&autoplay=1'
      )
    );
    this.showVideos[index] = true;
  }

  quiz: Quiz = {
    quizName: '',
    quizCreator: '',
    quizQuestions: [],
  };

  quizId = '';
  showQuizId = false;

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

  addQuestion() {
    let addedQuestion = {
      questionId: nanoid(),
      questionString: '',
      link: '',
      answerOptions: [
        { answerId: nanoid(), answerString: '', isAnswer: true },
        { answerId: nanoid(), answerString: '', isAnswer: false },
        { answerId: nanoid(), answerString: '', isAnswer: false },
        { answerId: nanoid(), answerString: '', isAnswer: false },
      ],
    };
    this.questions.push(addedQuestion);
  }

  saveQuiz() {
    this.questions.forEach((question) => {
      let id = this.extractYouTubeVideoId(question.link);
      if (id !== null) {
        question.link = id;
        this.quiz.quizQuestions.push(question.questionId);
      }
    });

    this.quizService.saveQuiz(this.quiz).subscribe((id) => {
      this.quizId = id;
      this.showQuizId = true;
    });

    this.quizService.saveQuestions(this.questions);
  }

  ngOnInit(): void {}
}
