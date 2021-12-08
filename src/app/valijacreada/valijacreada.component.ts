import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-valijacreada',
  templateUrl: './valijacreada.component.html',
  styleUrls: ['./valijacreada.component.styl']
})
export class ValijacreadaComponent implements OnInit {
  id: string = '';
  idValija: string = '';
  constructor(private AR: ActivatedRoute, private router: Router) {
    this.verficarRuta()
  }
  verficarRuta() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const state = navigation!.extras.state as { data: any };

      this.idValija = state.data
      console.log(state.data)
    }
  }
  ngOnInit(): void {
    this.id = this.AR.snapshot.paramMap.get('id')!
  }

}
