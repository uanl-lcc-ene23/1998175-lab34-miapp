import { Component, OnInit } from '@angular/core';

import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit{
  
  constructor(private actionSheetCtrl: ActionSheetController){ }

  ngOnInit(): void {
  }
  nombre = "Francisco";
  alumnos : any = ["Beto", "Carlos", "Daniela", "eby", "Alejandra", "Daniel"];
  
  mostrarMensaje(){
    alert("hola. mundo")
  }
  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Eliminar alumno',
      subHeader: 'Elimina al alumno de la lista',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    }); 
    
    await actionSheet.present();
  }
}