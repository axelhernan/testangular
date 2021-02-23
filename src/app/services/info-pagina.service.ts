import { InfoPage } from './../interfaces/info-pages-interfaces';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPage = {};
  cargada = false;
  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();

}

private cargarInfo(): any {
  this.http.get('assets/data/data-pages.json')
  .subscribe((resp: InfoPage) => {
    this.cargada = true;
    this.info = resp;
  });
 }

 private cargarEquipo(): any {
  this.http.get('https://testang-898eb-default-rtdb.firebaseio.com/equipo.json')
  .subscribe((resp: any) => {
    this.cargada = true;
    this.equipo = resp;
  });
}
}
