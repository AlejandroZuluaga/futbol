import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { FormControl, Validators } from '@angular/forms';
import { EquipoServices } from '../../services/equipo.services';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-add-equipo',
  templateUrl: './add-equipo.component.html',
  styleUrls: ['./add-equipo.component.css']
})
export class AddEquipoComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required]);

  public equipoadd: Equipo;
  constructor(
    private _equipoServices: EquipoServices,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.equipoadd = new Equipo(0, 'Cali', 'Carvajal', 2);
  }
  ngOnInit() {
  }
  onSave() {
    console.log(this.equipoadd);
    this._equipoServices.addEquipo(this.equipoadd).subscribe(
      response => {
        if (response.code === 200) {
          this._router.navigate(['equipo/list']);
        } else {
          console.log(response);

        }

      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
