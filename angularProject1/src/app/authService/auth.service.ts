import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private route: Router) { }

  onLogin() {
    const regEmailVal = localStorage.getItem('itemsSetEmail')
    const regPassVal = localStorage.getItem('itemsSetPass')
    const loginEmailVal = localStorage.getItem('loginEmailVal')
    const loginPassVal = localStorage.getItem('loginPassVal')
    if (regEmailVal === null || regPassVal === null || loginEmailVal === null || loginPassVal === null) {
      window.alert('kindly register to login')
      this.route.navigate(['registeration'])
      return false
    }
    else if(regEmailVal!=loginEmailVal&&regPassVal!=loginPassVal){
      window.alert('Email and password both are not valid')
      return false
    }
    else if(regEmailVal!=loginEmailVal){
      window.alert('Email is not valid')
      return false
    }
    else if(regPassVal!=loginPassVal){
      window.alert('password is not valid')
      return false
    }
    else if (regEmailVal === loginEmailVal && regPassVal === loginPassVal) {
      return true
    } else {

      return false
    }
  }

}
