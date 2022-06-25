import { Component, OnInit } from '@angular/core';
import { mockTasks } from '../mock-tasks';

@Component({
  selector: 'app-landing-content',
  templateUrl: './landing-content.component.html',
  styleUrls: ['./landing-content.component.css']
})
export class LandingContentComponent implements OnInit {

  taskId: number;

  constructor() { 
    this.taskId = 0;
  }

  ngOnInit(): void {
    let max: number = mockTasks.length;
    this.taskId = Math.floor(Math.random() * max + 1);
  }

}
