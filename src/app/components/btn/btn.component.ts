import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'submit' | 'reset' = 'button';
  @Input() alignText: 'left' | 'center' | 'right' = 'center';
  @Input() color: 'success' | 'primary' | 'red' | 'sky' | 'gray-light' =
    'success';

  get colorClasses() {
    return {
      'text-left': this.alignText === 'left',
      'text-center': this.alignText === 'center',
      'text-right': this.alignText === 'right',
      'text-white': ['success', 'primary', 'red', 'sky'].includes(this.color),
      'text-gray-700': ['gray-light'].includes(this.color),
      'bg-success-600': this.color === 'success',
      'hover:bg-success-700': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',
      'bg-primary-600': this.color === 'primary',
      'hover:bg-primary-700': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',
      'bg-red-600': this.color === 'red',
      'hover:bg-red-700': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
      'bg-sky-600': this.color === 'sky',
      'hover:bg-sky-700': this.color === 'sky',
      'focus:ring-sky-300': this.color === 'sky',
      'bg-gray-200': this.color === 'gray-light',
      'hover:bg-gray-500': this.color === 'gray-light',
      'focus:ring-gray-50': this.color === 'gray-light',
    };
  }
}
