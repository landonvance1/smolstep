import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
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
    this.router.navigate(['doTask/' + this.taskService.getNextTaskId()]);
  }

  ngOnInit(): void {
   
  }

}
