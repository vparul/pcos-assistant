export interface ILifestyleAnswer {
  symptoms: Array<string>;
  comments?: string;
  severity: number;
}

export interface ILifestyleProps {
  answers: ILifestyleAnswer;
  setAnswers: Function;
}
