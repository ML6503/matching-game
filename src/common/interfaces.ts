export interface ImageCategory {
  category: string;
  images: string[];
}

export interface IPlayer {
  id: number;
  ava?: string;
  playerFirstName: string;
  playerLastName: string;
  playerEmail: string;
  score: number;
}

export interface ITime {
  minutes: number;
  seconds: number;
}

export interface IStep {
  id: number;
  description: string;
}
