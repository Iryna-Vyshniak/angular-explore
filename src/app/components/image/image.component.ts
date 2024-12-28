import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss'
})
export class ImageComponent {
  imageUrl = 'https://th.bing.com/th/id/R.639e3b0355a42430576f839817f2528e?rik=SG8sGuN4p1GaAg&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fthumb%2fc%2fcf%2fAngular_full_color_logo.svg%2f250px-Angular_full_color_logo.svg.png&ehk=CtjnVaRGmD9%2fq92BSWmb%2bYMD3XgAGjSCe5MgEQXJNjw%3d&risl=&pid=ImgRaw&r=0';
  isCenter: boolean = true;
}
