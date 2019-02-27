import { Component, OnInit, NgModule, ViewChild, ElementRef } from '@angular/core';
import { AutoCompleteService } from 'src/app/shared/services/autocomplete.service';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
// import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

@NgModule({

})
export class HomeComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private _autocmpleteService: AutoCompleteService
  ) { }

  xml: string;
  picker = new Date();
  localidadesOrigem: string[] = new Array<string>();
  localidadesDestino: string[] = new Array<string>();
  siglas: string[] = new Array<string>();
  ids: string[] = new Array<string>();
  somenteIda: boolean;
  listaAdultos: number[] = new Array<number>();
  listaCriancas: number[] = new Array<number>();
  listaBebes: number[] = new Array<number>();
  valido: boolean;
  form: FormGroup;

  ngOnInit() {
    this.listaAdultos = [2, 3, 4, 5, 6, 7, 8, 9]
    this.listaCriancas = [2, 3, 4, 5, 6, 7, 8, 9]
    this.listaBebes = [2, 3, 4, 5, 6, 7, 8, 9]

    this.form = this.formBuilder.group({
      origem: ['', Validators.required],
      destino: ['', Validators.required],
      dataIda: ['', Validators.required],
      dataVolta: ['', Validators.required],
      dropAdultos: ['', Validators.required],
      dropCriancas: ['', Validators.required],
      dropBebes: ['', Validators.required],
    })

  }

  fnBuscaLocalOrigem(texto: string) {


    if (texto.trim().length >= 3) {
      this.xml = "";
      this.localidadesDestino = [];
      this.xml = this._autocmpleteService.list(texto);

      if (this.xml != undefined) {

        this.valido = true;

        var parser = new DOMParser();
        var doc = parser.parseFromString(this.xml, "application/xml");
        var nameArray = Array.from(doc.querySelectorAll('Name'));

        nameArray.forEach(element => {
          this.localidadesOrigem.push(element.textContent);
          if (element.textContent.includes("Todos")) {
            var index = this.localidadesOrigem.indexOf(element.textContent);
            this.arraymove(this.localidadesOrigem, index, 0)
          }
        });

      }

    }
    else {
      this.localidadesOrigem = [];
      $(".content-list").css("display", "none");
    }
  }

  fnBuscaLocalDestino(texto: string) {


    if (texto.trim().length >= 3) {
      this.xml = "";
      this.localidadesDestino = [];
      this.xml = this._autocmpleteService.list(texto);

      if (this.xml != undefined) {

        this.valido = true;

        var parser = new DOMParser();
        var doc = parser.parseFromString(this.xml, "application/xml");
        var nameArray = Array.from(doc.querySelectorAll('Name'));

        nameArray.forEach(element => {
          this.localidadesDestino.push(element.textContent);
          if (element.textContent.includes("Todos")) {
            var index = this.localidadesDestino.indexOf(element.textContent);
            this.arraymove(this.localidadesOrigem, index, 0)
          }
        });

      }

    }
    else {
      this.localidadesDestino = [];
      $(".content-list").css("display", "none");
    }
  }

  addLocation(evt) {
    $("#origem").val("");
    $("#origem").val(evt);
    $(".content-list").css("display", "none");
  }

  Pesquisar() {
    if (this.form.invalid) {
      alert("inválido")
    }
    else {
      alert("válido")
    }
  }

  arraymove(arr, fromIndex, toIndex) {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

}