import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogModel) {

    this.title = data.title;
    this.message = data.message;            
  }

  public onDismiss(): void {
    this.dialogRef.close(false);
  }
  public onConfirm(): void {
    this.dialogRef.close(true);
  }
}

export class ConfirmDialogModel {

  constructor(public title: string, public message: string){}

}