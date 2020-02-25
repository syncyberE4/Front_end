import { NgModule } from '@angular/core';
import { MatTooltipModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatCardModule, MatToolbarModule, MatListModule, MatSidenavModule, MatMenuModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule, CoreModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CdkTableModule } from '@angular/cdk/table';

const SModules = [
  CommonModule,
  FormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  FlexLayoutModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatDialogModule,
  MatCardModule,
  MatMenuModule,
  MatTooltipModule,
  CoreModule,
  RouterModule,
  BrowserModule,
  ReactiveFormsModule,
  CdkTableModule,
  MatDatepickerModule,
  MatNativeDateModule
]

const SComponents = [
]
const SPIPES = [
];

@NgModule({
  declarations: [ SComponents, SPIPES],
  imports: [ SModules ],
  exports: [ SModules, SComponents, SPIPES ]
})
export class SharedModule { }
