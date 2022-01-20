import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {
  person=[{name:"kiran",age:18,department:'Developmet',place:'Mandya'},{name:"Rudra",age:25,department:'Developmet',place:'bengaluru'},{name:"abhi",age:25,department:'Developmemt',place:'Mandya'}]
  constructor() { }

  ngOnInit(): void {
  }

}
