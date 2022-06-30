import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IconProp, text } from '@fortawesome/fontawesome-svg-core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Length, Difficulty } from '../constants';

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

  getTaskDurationText() {
    let text: string;
    if (this.task?.length === Length.seconds) {
      text = 'Seconds';
    } else if (this.task?.length === Length.minutes) {
      text = 'Minutes';
    } else {
      text = 'Hours';
    }

    return text;
  }

  getTaskDurationIcon() {
    let icon: IconProp;
    if (this.task?.length === Length.seconds) {
      icon = 'stopwatch';
    } else if (this.task?.length === Length.minutes) {
      icon = 'hourglass';
    } else {
      icon = 'clock';
    }

    return icon;
  }

  getTaskDifficultyText() {
    let text: string;
    if (this.task?.difficulty === Difficulty.easy) {
      text = 'Easy';
    } else if (this.task?.difficulty === Difficulty.medium) {
      text = 'Medium';
    } else {
      text = 'Hard';
    }

    return text;
  }
  
  getTaskDifficultyIcon() {
    let icon: IconProp;
    if (this.task?.difficulty === Difficulty.easy) {
      icon = 'temperature-empty';
    } else if (this.task?.difficulty === Difficulty.medium) {
      icon = 'temperature-half';
    } else {
      icon = 'temperature-full';
    }

    return icon;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let taskId: number = Number(params.get('id'));
      this.task = this.taskService.getTask(taskId);
    });
  }
}
