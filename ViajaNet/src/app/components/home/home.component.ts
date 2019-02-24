import { Component, OnInit } from '@angular/core';
import { AutoCompleteService } from 'src/app/shared/services/autocomplete.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor(
    private _autocmpleteService: AutoCompleteService
  ) { }

  xml: string;

  ngOnInit() {
  }

  fnBuscaLocal(texto: string) {

    if (texto.trim().length >= 3) {
      this.xml = this._autocmpleteService.list(texto);

      if (this.xml != undefined) {

        var parser = new DOMParser();
        var doc = parser.parseFromString(this.xml, "application/xml");
        var nameArray = Array.from(doc.querySelectorAll('Name'));
        var listaSiglas = new Array;
        var regex = "\((.*?)\)"

        nameArray.forEach(element => {
          console.log(element.textContent)
        });
      }

    }
  }

}