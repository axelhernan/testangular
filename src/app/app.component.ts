import { ProductosService } from './services/productos.service';
import { InfoPaginaService } from './services/info-pagina.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public infoPagina: InfoPaginaService, public infoProducts: ProductosService) {

  }

  title = 'portafolio';
}
