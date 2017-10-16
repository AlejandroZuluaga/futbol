import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-equipo',
  templateUrl: './add-equipo.component.html',
  styleUrls: ['./add-equipo.component.css']
})
export class AddEquipoComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required]);

  public equipo: Equipo;
  constructor() {
    this.equipo = new Equipo('Once Caldas', 'Maturana', '2 ');
  }
  ngOnInit() {
  }

}
