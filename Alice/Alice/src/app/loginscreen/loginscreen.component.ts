import {Component, NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginScreenService } from '../loginscreen.service';

@Component({
  selector: 'app-loginscreen',
  templateUrl: './loginscreen.component.html',
  styleUrls: ['./loginscreen.component.css']
})
export class LoginscreenComponent implements OnInit {

  email = "User";
  password = "";
  value = "";
  ngOnInit() {
  }

  constructor(private loginService: LoginScreenService, private router: Router, private ngZone: NgZone) { 
    
   }

  login() {
    this.loginService.login(this.email, this.password).subscribe(
      user => {
        if (user.token) {
          localStorage.setItem('TOKEN', user.token);
          localStorage.setItem('TIPO', user.tipo);
          this.ngZone.run(() => {
            this.router.navigateByUrl('home');
          });
        }
      }, r => {
        alert(r.error.error);
      });
  }
}
