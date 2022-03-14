import { Component, OnInit } from '@angular/core';
import { Cuenta } from './../../model/cuenta';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  item: Cuenta = {correo: '', contrasena:''}

  constructor() { }

  ngOnInit() {
  }

}
