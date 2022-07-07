import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent implements OnInit {


  constructor(private router: Router, private taskService: TaskService) {

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
