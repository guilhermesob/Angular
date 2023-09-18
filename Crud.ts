import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>Tarefas</h1>
      <input [(ngModel)]="newTask" placeholder="Nova Tarefa">
      <button (click)="addTask()">Adicionar</button>
      <ul>
        <li *ngFor="let task of tasks; let i = index">
          {{ task }}
          <button (click)="editTask(i)">Editar</button>
          <button (click)="deleteTask(i)">Excluir</button>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask = '';
  tasks: string[] = [];
  editingIndex: number | null = null;

  addTask() {
    if (this.editingIndex !== null) {
      this.tasks[this.editingIndex] = this.newTask;
      this.newTask = '';
      this.editingIndex = null;
    } else {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }

  editTask(index: number) {
    this.newTask = this.tasks[index];
    this.editingIndex = index;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
