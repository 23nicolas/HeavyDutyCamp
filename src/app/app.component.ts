import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'dapps-p1-root',
  template:
    <header>
    <h1>Hola soy bob</h1>
    <h1/>
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
