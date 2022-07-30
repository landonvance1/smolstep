import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';
import { BottomBarButtonArgs } from '../models/bottom-bar-button-args';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent implements OnInit {

  doTaskButton: BottomBarButtonArgs;
  addTaskButton: BottomBarButtonArgs;

  constructor(private router: Router, private taskService: TaskService) {
    this.doTaskButton = {
      buttonText: "Do a Task",
      buttonAction: () => this.doTaskClicked()
    }
    
    this.addTaskButton = {
      buttonText: "Add a Task",
      buttonAction: () => this.router.navigate(['addTask'])
    }
  }

  doTaskClicked() {
    let taskId: number = this.taskService.getNextTaskId();

    if (taskId > 0) {
      this.router.navigate(['doTask/' + taskId]);
    } else {
      this.router.navigate(['allDone']);
    }
  }

  ngOnInit(): void {
   
  }

}
