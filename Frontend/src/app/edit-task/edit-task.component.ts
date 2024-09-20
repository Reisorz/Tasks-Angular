import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html'
})
export class EditTaskComponent {
  task: Task = new Task();
  id: number;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router){}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.taskService.getTaskById(this.id).subscribe(
      {
        next: (data) => this.task = data 
        ,
        error: (error: any) => console.log(error)
      }
    );
  }

  onSubmit() {
    this.saveTask();
  }

  saveTask() {
    this.taskService.editTask(this.id, this.task).subscribe(
      {
        next: (data) => this.goToTaskList(),
        error: (error)=> console.log(error)
      
      }
    );
  }

  goToTaskList() {
    this.router.navigate(['/tasks']);
  }
}
