import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEquipoComponent } from './add-equipo/add-equipo.component';
import { ListEquipoComponent } from './list-equipo/list-equipo.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AddEquipoComponent, ListEquipoComponent, IndexComponent]
})
export class EquipoModule { }
