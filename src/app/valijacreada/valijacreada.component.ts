import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-valijacreada',
  templateUrl: './valijacreada.component.html',
  styleUrls: ['./valijacreada.component.styl']
})
export class ValijacreadaComponent implements OnInit {
  id: string = '';
  constructor(private AR: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
