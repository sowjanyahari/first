import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
 

import io from 'socket.io-client';
const socket = io('http://localhost:3001');

@Component({
  selector: 'app-low-priority-graph',
  templateUrl: './low-priority-graph.component.html',
  styleUrls: ['./low-priority-graph.component.css']
})
export class LowPriorityGraphComponent implements OnInit {



  constructor(private router: Router) { }
  title = 'dashboard';
  chart;
  chart2 = [];
  pie: any;
  doughnut1: any;
  minimalist:any;

  data1 = [];



  ngOnInit() {

    socket.on('data1', (res) => {
      this.updateChartData(this.chart, res, 0);
      this.updateChartData(this.doughnut1,res.slice(0,5), 0);
    })

    socket.on('data2', (res) => {
      this.updateChartData(this.chart, res, 1);
    })
    let options = {
      // aspectRatio: 1,
      // legend: false,
      tooltips: false,

      elements: {
        point: {
          borderWidth: function (context) {
            return Math.min(Math.max(1, context.datasetIndex + 1), 8);
          },
          hoverBackgroundColor: 'transparent',
          hoverBorderColor: function (context) {
            return "red";
          },
          hoverBorderWidth: function (context) {
            var value = context.dataset.data[context.dataIndex];
            return Math.round(8 * value.v / 1000);
          },
          radius: function (context) {
            var value = context.dataset.data[context.dataIndex];
            var size = context.chart.width;
            var base = Math.abs(value.v) / 1000;
            return (size / 24) * base;
          }

           
        }
      }
    };
    // this.doughnut =  new Chart('doughnut',{
    //   type: 'doughnut',
    //   options: {
    //     responsive: true,
    //     title: {
    //       display: true,
    //       text: 'Doughnut Chart'
    //     },legend: {
		// 			position: 'top',
		// 		},animation: {
		// 			animateScale: true,
		// 			animateRotate: true
		// 		}
    //   },
    //   data: {
		// 		datasets: [{
    //       //data: [45,10,5,25,15],
    //       data: [50,50],
		// 			//backgroundColor: ["red","orange","yellow","green","blue"],
    //       backgroundColor: ["red"],
    //       label: 'Dataset 1'
		// 		}],
		// 		//labels: ['Red','Orange','Yellow','Green','Blue']
		// 	}
    // })
    this.doughnut1 =  new Chart('doughnut3',{
      type: 'doughnut',
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Low Priority'
        },legend: {
					position: 'top',
				},animation: {
					animateScale: true,
					animateRotate: true
				}
      },
      data: {
				datasets: [{
          //data: [45,10,5,25,15],
          data: [50,50],
					//backgroundColor: ["red","orange","yellow","green","blue"],
          backgroundColor: ["yellow"],
          label: 'Dataset 1'
				}],
				//labels: ['Red','Orange','Yellow','Green','Blue']
			}
    })
}

  addData(chart, label, data) {
    chart.data.labels.push(label); 
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

removeData(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

updateChartData(chart, data, dataSetIndex){
  chart.data.datasets[dataSetIndex].data = data;
  chart.update();
}


gotopage1()
{
  this.router.navigate(['/driver-priority/lowprioritylist']);
}
}
