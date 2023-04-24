import { Component, OnInit } from '@angular/core';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  constructor(private consultas: ConsultasService){ }

  ngOnInit(): void {
    this.ObtenerProductos();
  }

  ObtenerProductos(){
    this.consultas.getProductos().subscribe(res =>{
      console.log(res);
    })
  }
}
