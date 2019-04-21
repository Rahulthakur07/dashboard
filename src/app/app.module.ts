import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatFormFieldModule , MatButtonModule, MatInputModule, MatRippleModule} from '@angular/material';
import 'hammerjs';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule , FormGroup , ReactiveFormsModule}   from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import { MatIconModule } from "@angular/material/icon";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	BrowserAnimationsModule,
	MatCheckboxModule,
	MatTableModule,
	MatPaginatorModule,
	MatSortModule,
	MatFormFieldModule,
	MatButtonModule,
	MatInputModule,
	MatRippleModule,
	MatDialogModule,
	FormsModule,
	ReactiveFormsModule,
	MatSnackBarModule,
	MatStepperModule,
	MatIconModule,
	MatProgressBarModule,
	MatListModule,
	MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DialogComponent],
  entryComponents: [DialogComponent],
})
export class AppModule { }
