import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  {path:'tasks', component: TaskListComponent},
  {path:'', redirectTo: 'tasks', pathMatch:'full'},
  {path:'add-task', component: AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
