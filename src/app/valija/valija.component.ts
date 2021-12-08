import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { Destiny } from '../destiny';
import { PackageService } from '../Services/package.service';
import { ListPackage } from '../Services/packages';
import { ValijaService } from '../Services/valija.service';

@Component({
  selector: 'app-valija',
  templateUrl: './valija.component.html',
  styleUrls: ['./valija.component.styl']
})
export class ValijaComponent implements OnInit {
  id: string = '';
  constructor(private packageService: PackageService, private AR: ActivatedRoute, private toastrService: NbToastrService, private valijaService: ValijaService, private router: Router) {
    this.verficarRuta()

  }
  verficarRuta() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      const state = navigation!.extras.state as { list: any };

      this.packages = state.list ? Array.from(state.list) : [];
    } else {
      this.packages = [];
    }
  }
  destinys: Destiny[] = [];
  Destino: any = null
  packages: ListPackage[] = [];
  guiaReferencia: string = '';
  editing: boolean = false
  idValija: string = '';
  ngOnInit(): void {
    this.destinys = [
      { name: 'Barcelona' },
      { name: 'Peninsula' }
    ];
    this.AR.queryParams.subscribe(params => {
      if (params['id'] !== undefined) {
        console.log(({ id: params['id'] }))
        this.idValija = params['id']
        this.getValija(params['id'])
      }
    })
  }
  onSubmit() {
    if(this.editing){
      let body = {
        input: {
          contenido: 'null',
          tipoValija: 'null',
          tiendaDestino: this.Destino.name,
          paquetes: this.packages.map((pack: any) => pack.id),
          numeroGuia: this.guiaReferencia
        },
        updateValijaId: this.idValija
      }
      this.valijaService.editar(body)
        .subscribe(
          response => {
            console.log(response)
            if (response.data.updateValija.includes("Valija actulizad Correctamente!")) {
              this.showToast('Actualizado Correctamente')
              this.router.navigate([`in/${localStorage.getItem('id')!}/valija/list`])
            } else {
              this.showToast(response.data.insertCliente, 'danger')
            }
          });
    }else{
   let body = {
      input: {
        contenido: 'null',
        tipoValija: 'null',
        tiendaDestino: this.Destino.name,
        paquetes: this.packages.map((pack: any) => pack.id),
        numeroGuia: this.guiaReferencia
      }
    }
    this.valijaService.createValija(body)
      .subscribe(
        response => {
          console.log(response)
          if (!response.errors) {
            this.showToast('Actualizado Correctamente')
            const navigationExtras: NavigationExtras = { state: { data: response.data.insertValija } }
            this.router.navigate([`in/${localStorage.getItem('id')!}/exitovalija`], navigationExtras)
          } else {
            this.showToast(response.data.insertCliente, 'danger')
          }
        });
    }
  }
  getValija(id: string) {
    let body = {
      getValijaId: id
    }
    this.valijaService.getValija(body)
      .subscribe(
        response => {
          console.log(response)
          if (!response.errors) {
            this.editing = true

            this.editar(response.data.getValija)
          } else {
            this.showToast(response.errors[0].message, 'danger')
          }
        });
  }
  getPackage(id: string) {
    let body = {
      getPackageId: id
    }
    this.packageService.getPackage(body)
      .subscribe(
        response => {
          console.log(response)
          if (!response.errors) {
            this.packages.push(response.data.getPackage)
            console.log(this.packages)
          } else {
            this.showToast(response.errors[0].message, 'danger')
          }
        });
  }
  editar(data: any) {
    this.guiaReferencia = data.numeroGuia
    data.paquetes.map((pack: any) => this.getPackage(pack))
    this.Destino = {name: data.tiendaDestino}
  }
  showToast(message: string, status = 'success') {
    this.toastrService.show(
      status || 'success',
      message,
      { status }
    );
  }
}
