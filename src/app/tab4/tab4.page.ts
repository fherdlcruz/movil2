import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  public nombre:string = "";
  private paterno:string="";
  materno:any="";
  edad:number = 0;
  sexo:string =  '';
  mascotas: string;
  idiomas = ['ESPAÑOL (ESPAÑA)','ESPAÑOL (MEXICO)','INGLES','PORTUGUES','FRANCES','ITALIANO','ALEMAN'];
  idiomaSelected:any;
  pasatiempos:any;
  pasatiempoSelected:any;

  constructor() { 
    this.pasatiempos = [
      {id:1,valor:'Fútbol', descripcion:'Retas en las canchas'},
    
      {id:2,valor:'Leer', descripcion:'Leer por las mañanas anter de comenzar el día'},

      {id:3,valor:'Programar',descripcion:'Escribir códigos de mis proyecto por 2 horas diarias'},

      {id:4,valor:'Enseñar', descripcion:'Compartir el conocimiento a todos y seguir aprendiendo'},

      {id:5,valor:'Cocinar', descripcion:'Cocinar los fines de semana con mi esposa'},
    ]
  }

  ngOnInit() {
    console.log("Iniciando el TAB 4 PAGE");
  }

  aumentarAnio():void{
    this.edad +=1;
  }
  restarAnio():void{
    this.edad -=1;
  }

}
