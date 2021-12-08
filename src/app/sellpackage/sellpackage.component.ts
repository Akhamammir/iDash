import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Destiny } from '../destiny';
import { PackageService } from '../Services/package.service';
import { ValijaService } from '../Services/valija.service';

@Component({
  selector: 'app-sellpackage',
  templateUrl: './sellpackage.component.html',
  styleUrls: ['./sellpackage.component.styl']
})
export class SellpackageComponent implements OnInit {
  id: string = '';
  valijas: any = [];
  first = 0;
  rows = 10;
  constructor(private packageService: PackageService, private toastrService: NbToastrService, private AR: ActivatedRoute, private router: Router) {
    this.verficarRuta()
  }

  verficarRuta() {
    const navigation = this.router.getCurrentNavigation();

    if (navigation!.extras.state) {
      const state = navigation!.extras.state as { data: any };
      if (state.data) {
        state.data.paquetes.map((pack: any) => this.getPackage(pack))
      }
    } else {
      console.log('errorX')
    }
  }

  destinys: Destiny[] = [];
  Destino: string = '';
  getPackage(id: string) {
    let body = {
      getPackageId: id
    }
    console.log(this.valijas, 'valijas')
    this.packageService.getPackage(body)
      .subscribe(
        response => {
          console.log(response)
          if (!response.errors) {
            this.valijas.push(response.data.getPackage)
            console.log(this.valijas)
          } else {
            this.showToast(response.errors[0].message, 'danger')
          }
        });
  }
  ngOnInit(): void {
    this.destinys = [
      { name: 'Barcelona' },
      { name: 'Peninsula' }
    ];
    this.id = this.AR.snapshot.paramMap.get('id')!
  }
  showToast(message: string, status = 'success') {
    this.toastrService.show(
      status || 'success',
      message,
      { status }
    );
  }
}
