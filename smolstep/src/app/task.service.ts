import { Injectable } from '@angular/core';
import { Task } from './task';
import { mockTasks } from './mock-tasks';
import { DeclineReason } from './constants'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  declineTask(id: number, reason: DeclineReason) {
    mockTasks.removeTask(id, reason);
  }

  getTask(taskId: number): Task {
    return mockTasks.getTask(taskId);
  }

  getNextTaskId(): number {
    return mockTasks.getNextTaskId();
  }
}
