import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.css',
})
export class PromoComponent {
  public promoGroup: FormGroup<any>;
  public canOpen: boolean = false;
  constructor(private router: Router) {
    this.promoGroup = this.makeFormGroup();
  }
  makeFormGroup(): FormGroup<any> {
    return new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phoneNo: new FormControl('', [
        Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}'),
        Validators.required,
      ]),
      msg: new FormControl(''),
    });
  }
  createRequest() {
    console.log(this.promoGroup.value);
    this.canOpen = true;
    timer(2000).subscribe(() => this.closePopup());
  }
  closePopup() {
    this.promoGroup.reset();
    this.canOpen = false;
    this.router.navigate(['']);
  }
}
