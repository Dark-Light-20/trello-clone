import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
  @Input() colorBtn: 'success' | 'primary' | 'red' = 'success';

  get colorClasses() {
    return {
      'bg-success-600': this.colorBtn === 'success',
      'hover:bg-success-700': this.colorBtn === 'success',
      'focus:ring-success-300': this.colorBtn === 'success',
      'bg-primary-600': this.colorBtn === 'primary',
      'hover:bg-primary-700': this.colorBtn === 'primary',
      'focus:ring-primary-300': this.colorBtn === 'primary',
      'bg-red-600': this.colorBtn === 'red',
      'hover:bg-red-700': this.colorBtn === 'red',
      'focus:ring-red-300': this.colorBtn === 'red',
    };
  }
}
