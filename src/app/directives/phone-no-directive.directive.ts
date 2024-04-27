import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPhoneNoDirective]',
})
export class PhoneNoDirectiveDirective {
  @HostListener('input', ['$event']) onInput(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/-/g, '');
    value = value.replace(/\D/g, '');
    let formattedValue = '';
    for (let i = 0; i < value.length; i++) {
      if (i === 3 || i === 6) {
        formattedValue += '-';
      }
      formattedValue += value.charAt(i);
    }
    input.value = formattedValue;
  }
}
