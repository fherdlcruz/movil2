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

  constructor() { }

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
