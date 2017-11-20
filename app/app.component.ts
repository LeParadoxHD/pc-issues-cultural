import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Primera aplicación';
  constructor(private router:Router) {}

  getRoute(url: string) {
    return this.router.url == url;
  }
}
