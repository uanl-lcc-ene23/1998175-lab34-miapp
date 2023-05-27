import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  getProductos(){ //Todos los productos
    return this.http.get('https://fakestoreapi.com/products');
  }

  getCategorias(){ //Todas las categorias
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  getCategoria(){ //Prodcutos por categoria
    return this.http.get('https://fakestoreapi.com/products/category/jewelery');
  }

  getProducto(){ //Producto en particular
    return this.http.get('https://fakestoreapi.com/products/1');
  }

  filtrarProducto(idProducto: number){
    return this.http.get('https://fakestoreapi.com/products/'+ idProducto)
  }
}


