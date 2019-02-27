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

        try {
            this._http.get(this.apiUrl + param, { responseType: 'text' }).subscribe(response => {

                try {
                    this.xml = response;
                }
                catch(error)
                {
                    return error.message();
                }
            });
        }
        catch(error){
            return error.message();
        }


        return this.xml;
    }

    private handleError(error: any) {
        this.xml = "";
        let message: string = "";

        if (error.status === 400) {
            return of(error.message);
        }


        return throwError(error);
    }
}