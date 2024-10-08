import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html'
})
export class TaskListComponent {
  tasks: Task[];

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit() {
    this.getTasks();
  }

  private getTasks() {
    this.taskService.getTaskList().subscribe((data => {this.tasks = data;}));
  }

  editTask(id: number) {
    this.router.navigate(['edit-task', id]);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(
      {
        next: (data) => this.getTasks(),
        error: (error) => console.log(error)
      }
    );
  }

}
