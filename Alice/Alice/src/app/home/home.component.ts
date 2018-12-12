import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('TIPO');
    this.router.navigate(['/loginscreen']);
  }

  userTipo(tipo: string) {
    if ( localStorage.getItem('TIPO') === tipo ) { return true; }
    return false;
  }

}
