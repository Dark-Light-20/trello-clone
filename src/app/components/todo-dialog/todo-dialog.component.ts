import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import {
  faBars,
  faCheckSquare,
  faCheckToSlot,
  faClock,
  faClose,
  faTag,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { ToDo } from '../../models/todo.model';

interface InputData {
  todo: ToDo;
}

interface OutputData {
  response: boolean;
}

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
})
export class TodoDialogComponent {
  readonly faClose = faClose;
  readonly faCheckToSlot = faCheckToSlot;
  readonly faBars = faBars;
  readonly faUser = faUser;
  readonly faTag = faTag;
  readonly faCheckSquare = faCheckSquare;
  readonly faClock = faClock;

  todo: ToDo;

  constructor(
    private _dialog: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) _data: InputData
  ) {
    this.todo = _data.todo;
  }

  close(): void {
    this._dialog.close();
  }

  closeWithRes(response: boolean): void {
    this._dialog.close({
      response,
    });
  }
}
