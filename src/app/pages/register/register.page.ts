import { Component, OnInit } from '@angular/core';
import { Cuenta } from './../../model/cuenta';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  item: Cuenta = {correo: '', contrasena:''}

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async register() {
    this.authService.register(this.item.correo, this.item.contrasena)
      .then(() => this.router.navigateByUrl('/login'));
  }

}
