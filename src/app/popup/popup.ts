import {Component, Inject} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PopupData {
  phone: string;
  name: string;
}

@Component({
  selector: 'popup',
  templateUrl: 'popup.html',
  styleUrls: ['popup.scss']
})
export class Popup {
  phone: string;
  name: string;

  ngOnInit() {
  }
    constructor(public dialog: MatDialog) {}
  
    openDialog(): void {
      const dialogRef = this.dialog.open(PopupDialog, {
        height: '450px',
        width: '600px',
        data: {name: this.name, phone: this.phone}
      });
        dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.name = result;
      });
    }
}

@Component({
  selector: 'popup-dialog',
  templateUrl: 'popup-dialog.html',
  styleUrls: ['popup.scss']
})
export class PopupDialog {
  constructor(
    public dialogRef: MatDialogRef<PopupDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PopupData) {}
}