import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { BuscarComponent } from './buscar/buscar.component';
import { VistadetallesComponent } from './vistadetalles/vistadetalles.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: ProductosComponent
  },
  {
    path:'buscar',
    component: BuscarComponent
  },
  {
    path:'producto/:id',
    component: VistadetallesComponent
  },
  {
    path:'',
    redirectTo:'/inicio',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
