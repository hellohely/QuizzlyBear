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
  quizId = '';
  showQuizId = false;
  savingError = false;

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

  removeVideo(link: SafeResourceUrl) {
    const index = this.youtubeLinks.indexOf(link);
    if (index !== -1) {
      this.youtubeLinks.splice(index, 1);
    }
    console.log('YoutubeLinks: ', this.youtubeLinks);
    this.showVideos[index] = false;
  }

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

    this.quizService.saveQuiz(this.quiz).subscribe({
      next: (res) => {
        if (res.status === 200) {
          this.quizId = res.body._id;
          this.quizService.saveQuestions(this.questions).subscribe({
            next: (res) => {
              if (res.status === 200) {
                this.showQuizId = true;
              } else {
                console.error(
                  'Failed to save questions. Response status: ' + res.status
                );
                this.savingError = true;
              }
            },
            error: (error) => {
              console.error('Error saving questions: ' + error.message);
              this.savingError = true;
            },
            complete: () => {},
          });
        } else {
          console.error('Failed to save quiz. Response status: ' + res.status);
          this.savingError = true;
        }
      },
      error: (error) => {
        console.error('Error saving quiz: ' + error.message);
        this.savingError = true;
      },
      complete: () => {},
    });
  }

  ngOnInit(): void {}
}
