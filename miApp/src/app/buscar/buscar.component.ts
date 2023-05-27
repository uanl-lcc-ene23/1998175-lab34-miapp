import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit{

  constructor(private productosService: ProductosService){}

  ngOnInit(): void {
      
  }

  idProducto: number = 0;
  producto: any = {};

  buscarProducto(){
    this.productosService.filtrarProducto(this.idProducto).subscribe(res => {
      this.producto = res;

      console.log(this.producto)
    })
  }
}
