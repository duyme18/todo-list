import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task.class';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {

  public title: string = '';

  @Output('addTask') addTask = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {

  }
  onSubmit(e) {
    e.preventDefault();
    this.addTask.emit(this.title);
    this.title = '';
  }
}
