
import { Difficulty, Length } from "../constants";

export interface GetNextTaskArgs {
  declinedTasks: number[],
  maxDifficulty: Difficulty,
  maxLength: Length
}
