import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public loginForm: FormGroup;
  public createPromo: boolean = false;
  constructor(private tokenService: TokenService, private router: Router) {
    this.loginForm = this.makeFormGroup();
  }
  makeFormGroup(): FormGroup<any> {
    return new FormGroup<any>({
      promoCode: new FormControl('', Validators.required),
    });
  }
  validateCode() {
    const { promoCode } = this.loginForm.value;
    let date = new Date();
    date.setMinutes(date.getMinutes() + 1);
    if (promoCode === 'adarsh') {
      this.tokenService.saveToken(date.toISOString());
      this.router.navigate(['dashboard']);
    } else {
      this.createPromo = true;
    }
  }
  closePopUp() {
    this.loginForm.reset();
    this.createPromo = false;
  }
  redirectToPromo() {
    this.router.navigate(['promoRequest']);
  }
}
