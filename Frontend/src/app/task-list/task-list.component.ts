import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  private getTasks() {
    this.taskService.getTaskList().subscribe((data => {this.tasks = data;}));
  }

}
