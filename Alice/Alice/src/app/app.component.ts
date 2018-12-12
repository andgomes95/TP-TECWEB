import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ALICE';
  subtitle = 'Arts Lab in Interfaces, Computers, and Everything';
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('TIPO');
    this.router.navigate(['/loginscreen']);
  }
}
