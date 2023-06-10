import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-basics';
  myTitle: string;
  imageSrc: string;
  favoriteAnimal: string

  constructor() {
    this.myTitle = "Learning Angular";
    this.imageSrc = "https://th.bing.com/th/id/OIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4?pid=ImgDet&rs=1"
    this.favoriteAnimal = "Cat"
  }
}
