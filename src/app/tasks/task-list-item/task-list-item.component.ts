import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css'],
})
export class TaskListItemComponent implements OnInit {
  @Input()
  task: Task = new Task();
  visibleDialogExcluir = false;
  @Output()
  onDeleteTask = new EventEmitter();

  constructor(
    private taskService: TaskService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {}

  ngOnInit() {}

  confirmDelete(task: Task) {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja excluir a tarefa:  <b> ${task.codigo} </b>`,
      header: 'Confirmação de exclusão',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.remove(task);
      }, 
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Exclusão cancelada',
          detail: 'A tarefa não foi excluída.',
        });
      }
    });
  }

  remove(task: Task) {
    if (task._id) {
      this.taskService.delete(task._id).subscribe(() => {
        this.onDeleteTask.emit(task);
      });
    }
  }

  onCheckChange(task: Task) {
    this.taskService.save(task).subscribe();
  }
}
