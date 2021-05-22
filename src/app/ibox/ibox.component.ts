import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ibox',
  templateUrl: './ibox.component.html',
  styleUrls: ['./ibox.component.styl']
})
export class IboxComponent implements OnInit {
  id: string = '';
  constructor(private AR: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
