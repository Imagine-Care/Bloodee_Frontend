import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {
    name: "John Doe",
    badge: "Temp",
    level: "Novice"
  }
  form: any = {
    prefix: "",
    name: "John",
    surname: "Doe",
    email: "John.doe"
  }
  edit = true;
  constructor() { }

  ngOnInit(): void {
  }
  logout() {
    console.log("Logout")
  }
  editchange() {
    this.edit = !this.edit;
  }
}
