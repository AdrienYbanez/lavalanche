import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TLoginForm} from "../../../types/t-login-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public isLoading = false;
  public errorMessage = '';
  public loginForm = new FormGroup<TLoginForm>({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  public get emailControl() {
    return this.loginForm.controls.email;
  }

  public get passwordControl() {
    return this.loginForm.controls.password;
  }

  constructor(private readonly fbAuth: AngularFireAuth) {
    this.fbAuth.authState.subscribe(auth => console.warn('auth : ', auth.displayName));
  }

  public submitForm() {
    if(this.loginForm.valid) {
      this.isLoading = true;
      this.fbAuth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
        .then(() => {
          this.isLoading = false;
          this.errorMessage = '';
        })
        .catch(error => {
          this.isLoading = false;
          this.setErrorMessage(error.code);
        })
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  private setErrorMessage(codeError: string): void {
    switch (codeError) {
      case 'auth/user-not-found': this.errorMessage = 'Cet email n\'existe pas';
        break;
      case 'auth/wrong-password': this.errorMessage = 'Ce mot de passe est incorrect';
        break;
      case 'auth/too-many-requests': this.errorMessage = 'Suite à de trop nombreuses tentatives, le service de connexion est suspendu. Merci de réessayer plus tard.';
        break;
      default: this.errorMessage = 'Une erreur inconnu s\'est produite. Merci de contacter Adrien'
        break;
    }
  }
}
