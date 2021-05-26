import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-documentlegalebox',
  templateUrl: './documentlegalebox.component.html',
  styleUrls: ['./documentlegalebox.component.styl']
})
export class DocumentlegaleboxComponent implements OnInit {

  id: string = '';
  constructor(private AR: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
