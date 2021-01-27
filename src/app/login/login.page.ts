import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl:NavController,
    private loadingCtrl: LoadingController,
    ) { }

  ngOnInit() {
  }

  async iniciarSesion(){
    const load = await this.loadingCtrl.create({message:'Iniciar sesión..',duration:2000});
    load.present();
    this.navCtrl.navigateRoot('/tabs/tab1');
    //this.loadingCtrl.dismiss(); // cerrar el loadingCtrl
  }

}
