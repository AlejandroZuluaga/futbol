import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EquipoModule } from './equipo/equipo.module';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './equipo/index/index.component';
import { AddEquipoComponent } from './equipo/add-equipo/add-equipo.component';
import { CurrentOptionComponent } from './current-option/current-option.component';

const appRoutes: Routes = [
  { path: 'equipo/index', component: IndexComponent },
  { path: 'equipo/add', component: AddEquipoComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CurrentOptionComponent
  ],
  imports: [
    BrowserModule,
    EquipoModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
