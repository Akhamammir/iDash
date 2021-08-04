import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-custormer-dash',
  templateUrl: './custormer-dash.component.html',
  styleUrls: ['./custormer-dash.component.styl']
})
export class CustormerDashComponent implements OnInit {
 id: string = '';
 basicData: any;
 basicOptions: any;
  constructor(private AR: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'My First dataset',
              backgroundColor: '#42A5F5',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'My Second dataset',
              backgroundColor: '#FFA726',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  };
  }

}
