import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Equipo } from '../equipo/equipo';

@Injectable()
export class EquipoServices {
    public url: string;

    constructor(
        public _http: Http

    ) {
        this.url = 'http://localhost:8081/futbol/webresources/com.futbol.entidades.equipo';
    }
    getEquipo() {
        return this._http.get(this.url).map(res => res.json());
    }

}
