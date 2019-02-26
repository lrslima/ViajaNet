import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { AutoCompleteService } from 'src/app/shared/services/autocomplete.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

@NgModule({

})
export class HomeComponent implements OnInit {

  constructor(
    private _autocmpleteService: AutoCompleteService
  ) { }

  xml: string;
  picker = new Date();
  localidades: string[] = new Array<string>();
  siglas: string[] = new Array<string>();
  ids: string[] = new Array<string>();
  somenteIda: boolean;
  listaAdultos: number[] = new Array<number>();
  listaCriancas: number[] = new Array<number>();
  listaBebes: number[] = new Array<number>();

  ngOnInit() {
    this.listaAdultos = [2,3,4,5,6,7,8,9]
    this.listaCriancas = [2,3,4,5,6,7,8,9]
    this.listaBebes = [2,3,4,5,6,7,8,9]

  }

  fnBuscaLocal(texto: string) {

    if (texto.trim().length >= 3) {
      this.xml = "";
      this.xml = this._autocmpleteService.list(texto);

      for (var i = this.localidades.length; i > 0; i--) {

        this.localidades.pop();

      }
      if (this.xml != undefined) {

        var parser = new DOMParser();
        var doc = parser.parseFromString(this.xml, "application/xml");
        var nameArray = Array.from(doc.querySelectorAll('Name'));

        nameArray.forEach(element => {
          this.localidades.push(element.textContent);
          if (element.textContent.includes("Todos")) {
            var index = this.localidades.indexOf(element.textContent);
            this.arraymove(this.localidades, index, 0)
          }
        });

      }

    }
  }

  arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

}