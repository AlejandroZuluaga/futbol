import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
@Component({
  selector: 'app-add-equipo',
  templateUrl: './add-equipo.component.html',
  styleUrls: ['./add-equipo.component.css']
})
export class AddEquipoComponent implements OnInit {
  public equipo: Equipo;
  constructor() {
    this.equipo = new Equipo("Once Caldas");
  }

  ngOnInit() {
  }

}
