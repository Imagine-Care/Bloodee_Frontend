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
  constructor() { }

  ngOnInit(): void {
  }
  logout() {
    console.log("Logout")
  }
}
