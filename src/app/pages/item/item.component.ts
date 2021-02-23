import { ItemDescription } from './../../interfaces/item-page-interfaces';
import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  item!: ItemDescription;
  id!: string;

  constructor(private route: ActivatedRoute, public productoService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
      this.productoService.getProductos(parametros.id)
        .subscribe( (producto: ItemDescription) => {
          this.item = producto;
          this.id = parametros.id;
          console.log(producto);
        });
    });
  }

}
