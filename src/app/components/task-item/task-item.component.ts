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

  constructor() { }

  ngOnInit() {
  }
  
}
