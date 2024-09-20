import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private urlBase = "http://localhost:8080/tasks-app/tasks";

  constructor(private clientHttp: HttpClient) { }

  getTaskList(): Observable<Task[]> {
    return this.clientHttp.get<Task[]>(this.urlBase);
  }

  addTask(task: Task): Observable<Object> {
    return this.clientHttp.post(this.urlBase, task);
  }

  getTaskById(id: number) {
    return this.clientHttp.get<Task>(`${this.urlBase}/${id}`);
  }

  editTask(id: number, task: Task): Observable<Object> {
    return this.clientHttp.put(`${this.urlBase}/${id}`, task);
  }

  deleteTask(id: number): Observable<Object> {
    return this.clientHttp.delete(`${this.urlBase}/${id}`);
  }

}
