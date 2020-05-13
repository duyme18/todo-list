import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.class';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input('task') task: Task;
  @Output('setStatus') setStatus = new EventEmitter<any>();
  @Output('delete') delete = new EventEmitter<any>();
  @Output('update') update = new EventEmitter<any>();


  public isEditing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onEditing() {
    this.isEditing = true;
  }

  onStopEditing() {
    this.isEditing = false;
  }

  onSave(): void {
    console.log("saving");
  }
}
