import { Component, OnInit } from '@angular/core';
import { TaskService } from './../../services/task.service';
import { Task } from './../../models/task.class';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public tasks: Task[] = [];
  public subscription: Subscription;

  constructor(
    public taskService: TaskService
  ) { }

  ngOnInit() {
    this.subscription = this.taskService.getAll().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

}
