import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { DeclineReason } from '../../constants';

@Component({
  selector: 'app-decline-task-sheet',
  templateUrl: './decline-task-sheet.component.html',
  styleUrls: ['./decline-task-sheet.component.css'],
  template: 'passed in {{ data.callback }}'
})
export class DeclineTaskSheetComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) private _data: {callback: (reason: DeclineReason) => void}) {

  }

  ngOnInit(): void {

  }

  reasonClicked(reason: number): void {
    this._data.callback(reason);
  }
}
