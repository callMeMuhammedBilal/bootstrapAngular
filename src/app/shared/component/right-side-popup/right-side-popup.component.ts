import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-right-side-popup',
  templateUrl: './right-side-popup.component.html',
  styleUrls: ['./right-side-popup.component.css'],
})
export class RightSidePopupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<RightSidePopupComponent>) {}

  ngOnInit(): void {}

  closeDialog() {
    this.dialogRef.close();
  }
}
