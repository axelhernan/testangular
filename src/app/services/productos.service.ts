import { ProductoInfo } from './../interfaces/producto-pages-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  producto: ProductoInfo[] = [];
  productosFiltrado: ProductoInfo[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos(): any {

    return new Promise((resolve, reject) => {
      this.http.get<ProductoInfo[]>('https://testang-898eb-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe( (resp: ProductoInfo[]) => {
        this.producto = resp;
        this.cargando = false;
        resolve;
      });
    });

  }

  getProductos(id: string): any{
    return this.http.get(`https://testang-898eb-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string): any{

    if (this.producto.length === 0){
      this.cargarProductos().then(() => {
        this.filtrarProductos(termino);
      });
    }else{
      this.filtrarProductos(termino);
    }
  }

  private filtrarProductos(termino: string): any{
    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.producto.forEach(prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(termino) >= 0  || tituloLower.indexOf(termino) >= 0){
        this.productosFiltrado.push(prod);
      }
    });
  }
}
