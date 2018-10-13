import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {
  title = ''
  content = ''
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>) { }
  ngOnInit() {
    const { title, content } = this.data
    this.title = title
    this.content = content
  }
  onClick(result: boolean) {
    this.dialogRef.close(result)
  }
}
