export type Props = {
  targetDate: Date;
};

export type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
};

export interface Blog {
  id: number;
  image: string;
  author: string;
  date: string;
  title: string;
  text: string;
  buttonText: string;
}

export interface BlogCardProps {
  image: string;
  author: string;
  date: string;
  title: string;
  text: string;
  buttonText: string;
}
