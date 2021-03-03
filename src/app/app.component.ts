import { ProductosService } from './services/productos.service';
import { InfoPaginaService } from './services/info-pagina.service';
import { Component, AfterViewInit } from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationEnd,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  loading = true;

  constructor(
    public infoPagina: InfoPaginaService,
    public infoProducts: ProductosService,
    public router: Router
  ) {}

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        setTimeout(() => {
          this.loading = true;
        }, 1000);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.loading = false;
      }
    });
  }

  title = 'portafolio';
}
