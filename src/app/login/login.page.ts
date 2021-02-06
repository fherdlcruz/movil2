import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl:NavController,
    private loadingCtrl: LoadingController,
    private authService:AuthService,
    ) { }

  ngOnInit() {
  }

  async iniciarSesion(){
    const load = await this.loadingCtrl.create({message:'Iniciar sesión..',duration:2000});
    load.present();
    this.navCtrl.navigateRoot('/tabs/tab1');
    //this.loadingCtrl.dismiss(); // cerrar el loadingCtrl
  }

  async loginFirebase(form){
    console.info('login... process...')
    console.log(form)
    console.log(form.value)
    console.log(form.value.email);
    console.log(form.value.pwd);

    this.authService.loginUser(form.value.email, form.value.pwd).then((response)=>{
      console.log(response);
    },(error)=>{
      console.log(error);
    });
  }

}
