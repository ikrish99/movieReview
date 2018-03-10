import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MovieDataService } from '../movie-data.service';
import * as Chart from 'chart.js'
import { timeout } from 'rxjs/operator/timeout';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit, AfterViewInit {

  private canvas: any;
  private ctx: any;
  private count: any;
  private myChart: any;

  constructor(private _movieService: MovieDataService) {
    this._movieService.Database$.subscribe(res => {
      this.count = [0, 0, 0, 0, 0, 0];
      res.forEach(element => {
        if (Number(element.rating) == 0) {
          this.count[0]++;
        } else if (Number(element.rating) == 1) {
          this.count[1]++;
        } else if (Number(element.rating) == 2) {
          this.count[2]++;
        } else if (Number(element.rating) == 3) {
          this.count[3]++;
        } else if (Number(element.rating) == 4) {
          this.count[4]++;
        } else if (Number(element.rating) == 5) {
          this.count[5]++;
        }
      });
      if (this.myChart != undefined) {
        setTimeout(() => {
          if (this.myChart != undefined) {
            this.myChart.destroy();
            this.loadChart();
          }
        }, 5000);
      }
    });
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.loadChart();
  }

  loadChart() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    this.myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
        labels: ["0", "1", "2", "3", "4", "5"],
        datasets: [{
          label: 'Rating',
          data: this.count,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 0, 0, 0.8)',
            'rgba(255, 206, 0, 1)',
            'rgba(255, 206, 200, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        display: true
      }
    });
  }

}
