import { Component, OnInit, Input } from '@angular/core';
import { Task } from './../../models/task.class';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input('tasks') tasks: Task[];

  constructor() { }

  ngOnInit() {
  }

}
