import { Router } from '@angular/router';
import { Cuenta } from './../../model/cuenta';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  item: Cuenta = {correo: '', contrasena:''}

  constructor(private authservice: AuthService,
              private alertController: AlertController,
              private router: Router,) { }

  ngOnInit() {
  }

  async login() {
    const connectionSuccess = await this.authservice.login(this.item.correo, this.item.contrasena);
    if (connectionSuccess) {
      console.log("has acertado")
      this.router.navigateByUrl('/home')
    } else {
      console.log("has fallado")
      this.presentAlert()
    }
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Conexión fallida',
      subHeader: 'No se ha podido acceder a la cuenta.',
      message: 'El correo electrónico y la contraseña proporcionados no son válidos.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}
