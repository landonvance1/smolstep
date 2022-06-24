import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-do-task-page',
  templateUrl: './do-task-page.component.html',
  styleUrls: ['./do-task-page.component.css']
})
export class DoTaskPageComponent implements OnInit {

  taskId: number;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.taskId = 0;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.taskId = Number(params.get('id'));
    });
  }

}
