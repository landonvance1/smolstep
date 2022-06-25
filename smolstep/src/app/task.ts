import { Difficulty, Length } from "./constants";

export interface Task {
    description: string;
    difficulty: Difficulty;
    id: number;
    length: Length;
    name: string;
}