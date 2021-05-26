import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exitopackage',
  templateUrl: './exitopackage.component.html',
  styleUrls: ['./exitopackage.component.styl']
})
export class ExitopackageComponent implements OnInit {
  id: string = '';
  constructor(private AR: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
