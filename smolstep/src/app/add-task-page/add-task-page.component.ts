import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Difficulty, Length } from '../constants';
import { AddTaskArgs } from '../models/add-task-args';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { BottomBarButtonArgs } from '../models/bottom-bar-button-args';

@Component({
  selector: 'app-add-task-page',
  templateUrl: './add-task-page.component.html',
  styleUrls: ['./add-task-page.component.css']
})
export class AddTaskPageComponent implements OnInit {

  
  addTaskButton: BottomBarButtonArgs;
  taskName: FormControl<string | null>;
  taskDescription: FormControl<string | null>;
  taskDifficulty: FormControl<Difficulty | null>;
  taskLength: FormControl<Length | null>;

  constructor(private taskService: TaskService, private router: Router) {
    this.taskName = new FormControl(null);
    this.taskDescription = new FormControl(null);
    this.taskDifficulty = new FormControl(null);
    this.taskLength = new FormControl(null);

    this.addTaskButton = {
      buttonText: "Add Task",
      buttonAction: () => this.addTask()
    }
  }

  ngOnInit(): void {
  }

  addTask() {
    if (this.taskName.value && this.taskDescription.value && this.taskDifficulty.value && this.taskLength.value) {
      let addArgs: AddTaskArgs = {
        name: this.taskName.value,
        description: this.taskDescription.value,
        difficulty: this.taskDifficulty.value,
        length: this.taskLength.value
      }
      this.taskService.addTask(addArgs);
      this.router.navigate(['']);
    } else {
      alert('you gotta fill out the stuff, bruv')
    }
  }
}
