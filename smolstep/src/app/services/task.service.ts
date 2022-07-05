import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { mockTasks } from './mock-tasks';
import { DeclineReason, Difficulty, Length } from '../constants'
import { GetNextTaskArgs } from '../models/get-next-task-args';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private _declinedTasks: number[];
  private _maxDifficulty: Difficulty;
  private _maxLength: Length;

  constructor() {
    this._maxDifficulty = Difficulty.hard;
    this._maxLength = Length.hours;
    this._declinedTasks = [];
  }

  declineTask(task: Task, reason: DeclineReason) {
    if (task) {
      this._declinedTasks.push(task.id);

      if (reason == DeclineReason.TooHard) {
        this._maxDifficulty = task.difficulty - 1;
      } else if(reason == DeclineReason.TooLong) {
        this._maxLength = task.length - 1;
      }
    }
  }

  getTask(taskId: number): Task {
    return mockTasks.getTask(taskId);
  }

  getNextTaskId(): number {
    let args: GetNextTaskArgs = {
      declinedTasks: this._declinedTasks,
      maxDifficulty: this._maxDifficulty,
      maxLength: this._maxLength
    }

    return mockTasks.getNextTaskId(args);
  }
}
