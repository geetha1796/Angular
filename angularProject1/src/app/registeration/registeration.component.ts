import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {
  constructor(private route: Router) { }
  registerationlocalDBVal = localStorage.getItem('itemsSetEmail')
  registerationDetails(form: NgForm) {
    localStorage.setItem('itemsSetEmail', JSON.stringify(form.value.emailInp))
    localStorage.setItem('itemsSetPass', JSON.stringify(form.value.passInp))
    this.registerationlocalDBVal = localStorage.getItem('itemsSetEmail')
    this.route.navigate(['login'])
    window.alert('Registeration successfull')
  }
  clearDB() {
    localStorage.clear()
    this.registerationlocalDBVal = localStorage.getItem('itemsSetEmail')
  }

  ngOnInit(): void {
  }

}
