import { Injectable } from '@angular/core';
import { Auth, User, signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private auth: Auth) { }

  login(email: string, password: string): Promise<boolean> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(
        data => {
          this.user = data.user;
          return true;
        },
        error => {
          console.error(error)
          return false;
        }
      );
  }

  getCurrentUser(): User {
    return this.user
  }

  register(correo: string, contrasena: string) {
    return createUserWithEmailAndPassword(this.auth, correo, contrasena);
  }

  resetPassword(correo: string){
    const auth = getAuth();
    sendPasswordResetEmail(auth, correo)
      .then(() => {
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
}