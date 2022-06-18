import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    p{
      color: purple;
    }
  `]
})
export class AppComponent {
  title = 'The greatest';
  name = 'Scott';
}
