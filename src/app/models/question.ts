import { answerOption } from './answerOption';

export interface Question {
  questionId: string;
  questionString: string;
  link: string;
  answerOptions: answerOption[];
}
