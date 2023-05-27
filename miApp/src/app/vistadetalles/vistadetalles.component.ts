import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-vistadetalles',
  templateUrl: './vistadetalles.component.html',
  styleUrls: ['./vistadetalles.component.css']
})
export class VistadetallesComponent implements OnInit{

  constructor(private rutaActiva: ActivatedRoute, buscarProducto: ProductosService){}



  producto : any;

  ngOnInit(): void {
    this.producto = this.rutaActiva.snapshot.params['id']
  }

}
