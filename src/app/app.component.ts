import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./components/nav/nav.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PresentacionComponent } from "./components/presentacion/presentacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, FooterComponent, PresentacionComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio';

}


