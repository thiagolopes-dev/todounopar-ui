import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Task[]>(`${environment.apiUrl}/tasks`);
  }

  getbyId(id: string) {
    return this.http.get<Task>(`${environment.apiUrl}/tasks/${id}`);
  }

  save(task: Task) {
    const taskBody = {
      description: task.description,
      completed: task.completed,
    };
    if (task._id) {
      return this.http.put<Task>(
        `${environment.apiUrl}/tasks/${task._id}`,
        taskBody
      );
    } else {
      return this.http.post<Task>(`${environment.apiUrl}/tasks`, taskBody);
    }
  }

  delete(id: string) {
    return this.http.delete<void>(`${environment.apiUrl}/tasks/${id}`);
  }
}
