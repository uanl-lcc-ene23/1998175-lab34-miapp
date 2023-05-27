import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  constructor(private productosConsulta: ProductosService) { }

  categoria = document.getElementById("categoria");
  productos: any = [];

  ngOnInit(): void{
    this.obtenerProductos();
    this.obtenerCategorias();
    this.obtenerPorCategoria();
    this.obtenerPorID();
  }

  obtenerProductos(){
    this.productosConsulta.getProductos().subscribe(res => {
      this.productos = res;
      console.log(res)
    })
  }

  obtenerCategorias(){
    this.productosConsulta.getCategorias().subscribe(res => {
      console.log(res);
    })
  }

  obtenerPorCategoria(){
    this.productosConsulta.getCategoria().subscribe(res => {
      console.log(res);
    })
  }
  
  obtenerPorID(){
    this.productosConsulta.getProducto().subscribe( res => {
      console.log(res);
    })
  }
}
