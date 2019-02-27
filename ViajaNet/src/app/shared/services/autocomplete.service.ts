import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map, catchError, switchMap } from 'rxjs/operators';
import { throwError, of, bindNodeCallback } from 'rxjs';


@Injectable({
    providedIn: 'root',
})

export class AutoCompleteService {


    constructor(
        private _http: HttpClient,
    ) { }


    apiUrl = "https://www.viajanet.com.br/resources/api/Autocomplete/"
    param = "";

    xml: string = "";

    list(param: string) {

        this._http.get(this.apiUrl + param, { responseType: 'text' }).subscribe(response => {
            this.xml = response;
            catchError(error => 
                this.handleError(error)); 
        });

        if (this.xml == "") {
            return undefined
        }
        else {
            return this.xml;
        }
    }

    private handleError(error: any) {
        let message: string = "";

        if (error.status === 400) {
            // return error.error.result;
            return of(error.message);
        }


        return throwError(error);
    }
}