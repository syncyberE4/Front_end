import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-bevestig-dialog',
  templateUrl: './bevestig-dialog.component.html',
  styleUrls: ['./bevestig-dialog.component.scss']
})
export class BevestigDialogComponent implements OnInit {

  // customDescription: string;

  constructor(
    private dialogRef: MatDialogRef<BevestigDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    // this.customDescription = data.Description;
  }

  ngOnInit() {
  }

  yes() {
    this.dialogRef.close(true);
  }

  no() {
    this.dialogRef.close(false);
  }

}
