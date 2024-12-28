import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { ImageComponent } from './components/image/image.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TestComponent, ImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-explore';
}
