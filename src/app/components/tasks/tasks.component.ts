import { Component, OnInit, Output } from '@angular/core';
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

  addTask(title: string) {
    let task = new Task(title);
    this.subscription = this.taskService.add(task).subscribe((data: Task) => {
      this.tasks.push(data);
    });
  }

  setStatus(task: Task) {
    task.completed = !task.completed;
    this.subscription = this.taskService.update(task).subscribe((data: Task) => {
      this.updateData(data);
    });

  }

  onDelete(id: number) {
    this.subscription = this.taskService.delete(id).subscribe((data: Task) => {
      console.log(data);
      this.updateDataAfterDelete(id);
    })
  }

  updateDataAfterDelete(id) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == id) {
        this.tasks.splice(i, 1);
        break;
      }
    }
  }

  updateData(data) {
    for (var i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id == data.id) {
        this.tasks[i] = data;
        break;
      }
    }
  }
}
