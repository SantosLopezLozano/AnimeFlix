import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Cuenta } from 'src/app/model/cuenta';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  
  item: Cuenta = {correo: '', contrasena:''}

  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  resetPassword() {
    this.authService.resetPassword(this.item.correo)
      // .then(
      //   () => {
      //     this.alertSucces();
      //     this.router.navigateByUrl('/login');
      //   })
      // .catch(
      //   () => this.alertError()
      // );
  }

  async alertSucces() {
    const alert = await this.alertController.create({
      header: 'Recover Password',
      message: `an email has been sent to the address provided.`,
      buttons: ['Accept']
    });

    await alert.present();
  }

  async alertError() {
    const alert = await this.alertController.create({
      header: 'Recover Password',
      message: `no se ha podido enviar el correo a la dirección proporcionada`,
      buttons: ['Accept']
    });

    await alert.present();
  }

}
