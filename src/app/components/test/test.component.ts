import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})

export class TestComponent {
  title: string = 'ANGULAR EXPLORE';
  firstName: string = 'Mr.'
  secondName: string = 'Fletcher Sheldon'
  isActive: boolean = true;
  isDisabled: boolean = false;
  isClickState: boolean = false;

  getFullName() {
    return `${this.firstName} ${this.secondName}`
  }

  toggleState() {
    return this.isClickState = !this.isClickState;
  }
}
