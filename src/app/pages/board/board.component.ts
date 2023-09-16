import { Dialog } from '@angular/cdk/dialog';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { TodoDialogComponent } from '../../components/todo-dialog/todo-dialog.component';
import { Column, ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styles: [
    `
      /* Animate items as they're being sorted. */
      .cdk-drop-list-dragging .cdk-drag {
        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
      }

      /* Animate an item that has been dropped. */
      .cdk-drag-animating {
        transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
      }
    `,
  ],
})
export class BoardComponent {
  columns: Column[] = [
    {
      title: 'To Do',
      todos: [
        { id: '1', title: 'Make dishes' },
        { id: '2', title: 'Buy unicorn' },
      ],
    },
    {
      title: 'Doing',
      todos: [{ id: '3', title: 'Watch Angular Path in Platzi' }],
    },
    {
      title: 'Done',
      todos: [{ id: '4', title: 'Play video games' }],
    },
  ];

  constructor(private _dialog: Dialog) {}

  drop(event: CdkDragDrop<ToDo[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn(): void {
    this.columns.push({
      title: 'New Column',
      todos: [],
    });
  }

  openDialog(): void {
    this._dialog.open(TodoDialogComponent, {
      minWidth: '300px',
      maxWidth: '50%',
      autoFocus: false,
    });
  }
}
