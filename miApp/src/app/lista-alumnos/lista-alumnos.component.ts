import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit{

  constructor(private actionSheetCtrl: ActionSheetController) {}

  ngOnInit(): void {
    
  }

  nombre: string = "Juan"; //var string

  alumnos: any = ["Carlos", "Kevin", "Myriam", "Eduardo", "Fernanda", "Georgina", "Ivan"];

  async presentarActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Eliminar',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          data:{
            action: 'delete'
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          data: {
            action: 'cancel'
          },
        },
      ],
    });

    await actionSheet.present()

    const result = await actionSheet.onDidDismiss();

  }
}
