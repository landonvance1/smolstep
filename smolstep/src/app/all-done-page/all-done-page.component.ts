import { Component, OnInit } from '@angular/core';
import { BottomBarButtonArgs } from '../models/bottom-bar-button-args';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-done-page',
  templateUrl: './all-done-page.component.html',
  styleUrls: ['./all-done-page.component.css']
})
export class AllDonePageComponent implements OnInit {

  addTaskButton: BottomBarButtonArgs;

  constructor(private router: Router) { 
    this.addTaskButton = {
      buttonText: "Add a Task",
      buttonAction: () => this.router.navigate(['addTask'])
    }
  }

  ngOnInit(): void {
  }

}
