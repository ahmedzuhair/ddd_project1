import { Component }          from '@angular/core';

@Component({
  selector: 'my-app',
  template: `

<div class ="container">
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/presidents" routerLinkActive="active">Presidents</a>
    </nav>
    <router-outlet></router-outlet>

    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Presidents';
}
