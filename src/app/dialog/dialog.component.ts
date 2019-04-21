import { Component, OnInit, Inject, ViewEncapsulation} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit {

	firstFormGroup: FormGroup;
  	secondFormGroup: FormGroup;
	modalTitle: string;
	status: string;

	//varibales to determine wt stage the process has completed
	first: boolean;
	second: boolean;
	third: boolean;

	constructor(@Inject(MAT_DIALOG_DATA) public data: any, private snackBar: MatSnackBar, private _formBuilder: FormBuilder) {
	this.modalTitle = data.row.name;
	console.log(data.row.extra)
 	}

  	ngOnInit() {
		this.firstFormGroup = this._formBuilder.group({
      			firstCtrl: ['', Validators.required],
    		});
    
		this.secondFormGroup = this._formBuilder.group({
      		secondCtrl: ['', Validators.required]
		});

		this.first = (1 > 2) ? false : true;
		this.second = (2 > 2) ? false : true;
		this.third = (3 > 2) ? false : true;
  	}

	sendMail() {
		console.log('mail sent');
		
		let snackBarRef = this.snackBar.open('Mail Sent','Close', {
      		duration: 1500,
			verticalPosition: 'top',
    		});
	}	

}
