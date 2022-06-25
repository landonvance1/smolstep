import { Injectable } from '@angular/core';
import { Task } from './task';
import { mockTasks } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTask(taskId: number): Task {
    return mockTasks.filter(x => x.id === taskId)[0];
  }
}
