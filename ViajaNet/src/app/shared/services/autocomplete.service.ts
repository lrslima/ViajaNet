import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';


@Injectable({
    providedIn: 'root',
})

export class AutoCompleteService {


    constructor(
        private _http: HttpClient,
    ) { }


    apiUrl = "https://www.viajanet.com.br/resources/api/Autocomplete/"
    param = "";

    // url = this.apiUrl + this.param;


    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'text/xml' })
    };

    list(param: string) {


    return this._http.get(this.apiUrl + param, { headers: this.httpOptions })
        .pipe(map((response: any) =>
            response != null ? response : null),
            catchError(error =>
                this.handleError(error)));
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