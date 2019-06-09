import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {

	public example: any;
	public expanded: any;
	public chart: any;

	constructor() { 

	}

	ngOnInit() {

		this.chart = new Chart('canvas', {
		    type: 'doughnut',
		    data: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
			    label: '# of Votes',
			    data: [12, 19, 3, 5, 2, 3],
			    backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			    ],
			}]
		    },
		    options: {
                	responsive: true,
			onClick: this.fun,
            	    }

		});	

		this.chart = new Chart('canvas1', {
		    type: 'doughnut',
		    data: {
			labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
			datasets: [{
			    label: '# of Votes',
			    data: [12, 19, 3, 5, 2, 3],
			    backgroundColor: [
				'rgba(255, 99, 132, 0.2)',
				'rgba(54, 162, 235, 0.2)',
				'rgba(255, 206, 86, 0.2)',
				'rgba(75, 192, 192, 0.2)',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)'
			    ],
			}]
		    },
		    options: {
                	responsive: true,
			onClick: this.fun,
            	    }

		});	

	}


	fun(ev, e){
		 console.log(e);
		 if (e.active.length > 0) {
    			const chart = e.active[0]._chart;
    			const activePoints = chart.getElementAtEvent(e.event);
    
			if ( activePoints.length > 0) {
      				const clickedElementIndex = activePoints[0]._index;
      				const label = chart.data.labels[clickedElementIndex];
      				const value = chart.data.datasets[0].data[clickedElementIndex];
      				console.log(clickedElementIndex, label, value)
    			}
  		}
		
	}

}
