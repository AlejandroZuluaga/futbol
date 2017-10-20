import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Equipo } from '../equipo/equipo';

@Injectable()
export class EquipoServices {
    public url: string;
    equipoList: Array<Equipo>;
    headersPost: Headers;
    options: RequestOptions;

    constructor(private http: HttpClient){
    }
    getEquipo() {
        this.http.get('http://localhost:8080/tienda/webresources/entidades.cliente')
        .subscribe(data => {
            this.equipoList = data as Array<Equipo>;
        });
    }

    addEquipo(equipoAdd: Equipo) {
        const body = {id: equipoAdd.idequipo, nombre: equipoAdd.nombreequipo, directortecnico: equipoAdd.directortecnico };
        this.http.post('http://localhost:8080/tienda/webresources/entidades.cliente', body)
            .subscribe(data => {
              this.getEquipo();
            });
          }
}
