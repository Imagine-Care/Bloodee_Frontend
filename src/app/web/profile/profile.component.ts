import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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
  constructor(
    private tokenService: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tokenService.redirectlogin();
  }
  logout() {
    this.tokenService.signOut();
    this.router.navigate(['login'])
  }
  editchange() {
    this.edit = !this.edit;
  }
}
