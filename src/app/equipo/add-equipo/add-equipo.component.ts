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
  equipo: Equipo;
  emailFormControl = new FormControl('', [
    Validators.required]);

  public equipoadd: Equipo;
  constructor(
    private equipoServices: EquipoServices,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  ngOnInit() {
    this.equipo = new Equipo();
  }
  onSave() {

    this.equipoServices.addEquipo(this.equipo);
    this.equipo = new Equipo();


  }

}
