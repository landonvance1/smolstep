
import { Difficulty, Length } from "../constants";

export interface AddTaskArgs {
  description: string;
  difficulty: Difficulty;
  length: Length;
  name: string;
}
