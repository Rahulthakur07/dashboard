import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'dashboard';
	
	onChange($event){
		console.log($event.source.value);
	}	

}
