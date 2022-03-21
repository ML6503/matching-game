export interface ImageCategory {
  category: string;
  images: string[];
}

export interface IPlayer {
  id: number;
  playerFirstName: string;
  playerLastName: string;
  playerEmail: string;
  time: number;
}

export interface ITime {
  minutes: number;
  seconds: number;
}