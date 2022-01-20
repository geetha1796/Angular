import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../authService/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router, private authSer: AuthService) { }

  loginDetails(form: NgForm) {
    localStorage.setItem('loginEmailVal', JSON.stringify(form.value.emailInp))
    localStorage.setItem('loginPassVal', JSON.stringify(form.value.passInp))
    
    if (this.authSer.onLogin() === true) {
      this.route.navigate(['userdashboard'])
      window.alert('login Sucessful')
    } else {
    }
  }

  clearDB() {
    localStorage.clear()
  }

  ngOnInit(): void {
  }

}
