import { answerOption } from './answerOption';

export class Question {
  constructor(
    questionId: string,
    questionString: string,
    link: string,
    answerOptions: answerOption[]
  ) {}
}
