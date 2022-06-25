import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-do-task-page',
  templateUrl: './do-task-page.component.html',
  styleUrls: ['./do-task-page.component.css']
})
export class DoTaskPageComponent implements OnInit {

  task: Task | null;

  constructor(private route: ActivatedRoute, private router: Router, private taskService: TaskService) { 
    this.task = null;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let taskId: number = Number(params.get('id'));
      this.task = this.taskService.getTask(taskId);
    });
  }
}
