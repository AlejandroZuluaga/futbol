import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { HttpClient } from '@angular/common/http';
=======
import { Http, Response, RequestOptions, Headers } from '@angular/http';
>>>>>>> a3fd0426c9a5c091e97d6cb9fb8473a4c588c288
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Equipo } from '../equipo/equipo';

@Injectable()
export class EquipoServices {
    public url: string;
<<<<<<< HEAD
    equipoList: Array<Equipo>;
    headersPost: Headers;
    options: RequestOptions;

    constructor(private http: HttpClient){
=======
    public options: RequestOptions;
    public header: Headers;
    constructor(
        public _http: Http


    ) {
        this.url = 'http://localhost:8081/futbol/webresources/com.futbol.entidades.equipo';
>>>>>>> a3fd0426c9a5c091e97d6cb9fb8473a4c588c288
    }
    getEquipo() {
        this.http.get('http://localhost:8080/tienda/webresources/entidades.cliente')
        .subscribe(data => {
            this.equipoList = data as Array<Equipo>;
        });
    }

    addEquipo(equipoAdd: Equipo) {
<<<<<<< HEAD
        const body = {id: equipoAdd.idequipo, nombre: equipoAdd.nombreequipo, directortecnico: equipoAdd.directortecnico };
        this.http.post('http://localhost:8080/tienda/webresources/entidades.cliente', body)
            .subscribe(data => {
              this.getEquipo();
            });
          }
=======
        const json = JSON.stringify(equipoAdd);
        const params = json;
        const headers = new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        });
        return this._http.post(this.url, params, { headers: headers }).map(res => res.json());
    }
>>>>>>> a3fd0426c9a5c091e97d6cb9fb8473a4c588c288
}
