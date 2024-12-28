import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})

export class TestComponent {
  title: string = 'ANGULAR EXPLORE';
  firstName: string = 'Mr.';
  secondName: string = 'Fletcher Sheldon';
  isActive: boolean = true;
  isDisabled: boolean = false;
  isClickState: boolean = false;
  userName: string = '';
  userEmail: string = '';


  getFullName() {
    return `${this.firstName} ${this.secondName}`
  }

  toggleState() {
    return this.isClickState = !this.isClickState;
  }

  submitForm() {
    console.log('Email enter by user: ', this.userEmail);
  }
}
