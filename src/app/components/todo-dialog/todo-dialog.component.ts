import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import {
  faBars,
  faCheckSquare,
  faCheckToSlot,
  faClock,
  faClose,
  faTag,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

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

  constructor(private _dialog: DialogRef) {}

  close(): void {
    this._dialog.close();
  }
}
