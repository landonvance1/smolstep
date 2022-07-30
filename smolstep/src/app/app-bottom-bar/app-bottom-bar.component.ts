import { Component, OnInit, Input } from '@angular/core';
import { BottomBarButtonArgs } from '../models/bottom-bar-button-args';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './app-bottom-bar.component.html',
  styleUrls: ['./app-bottom-bar.component.css']
})
export class AppBottomBarComponent implements OnInit {

  @Input('primary')
  primaryButtonArgs: BottomBarButtonArgs | null;

  @Input('secondary')
  secondaryButtonArgs: BottomBarButtonArgs | null;

  constructor() { 
    this.primaryButtonArgs = null;
    this.secondaryButtonArgs = null;
  }

  ngOnInit(): void {
  }

}
