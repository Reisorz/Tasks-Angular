import { TagContentType } from '@angular/compiler';
import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html'
})
export class AddTaskComponent {
  task: Task = new Task();

  constructor(private taskService: TaskService, private router: Router){}

  onSubmit() {
    if (this.task.taskName!=null){
      this.saveTask();
    }
    else {
      alert("Task field must be filled");
    }
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
    this.router.navigate(['/tasks']);
  }

}
