import { TagContentType } from '@angular/compiler';
import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  task: Task = new Task();

  constructor(private taskService: TaskService, private enrouter: Router){}

  onSubmit() {
    this.saveTask();
  }

  saveTask() {
    this.taskService.addTask(this.task).subscribe(
      {
        next: (data) => {
          this.goToTasksList();
        },
        error: (error: any) =>{console.log(error)}
      }
    );
  }

  goToTasksList() {
    this.enrouter.navigate(['/tasks']);
  }

}
