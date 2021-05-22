import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.styl']
})
export class PricesComponent implements OnInit {


  selectedValuesFeactures: string[] = [];
  id: string = '';
 constructor(private AR: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
