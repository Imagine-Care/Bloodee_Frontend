import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {
    name: "",
    badge: "",
    level: ""
  }
  form: any = {
    prefix: "",
    name: "",
    surname: "",
    email: ""
  }
  edit = true;
  constructor(
    private tokenService: TokenStorageService,
    private router: Router,
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.tokenService.redirectlogin();
    this.callData();
  }
  callData(){
    this.mainService.getUser().subscribe((data)=>{
      this.form.prefix = data.user.prefix;
      this.form.name = data.user.firstname;
      this.form.surname = data.user.surname;
      this.form.email = data.user.email;
      this.user.name = data.user.username;
      this.user.badge = "👑";
      this.user.level = "Starter";
    })
  }

  logout() {
    this.tokenService.signOut();
    this.router.navigate(['login'])
  }
  editchange() {
    if (!this.edit) {
      this.mainService.updateUser(
        this.form.email,
        this.form.prefix,
        this.form.name,
        this.form.surname
      ).subscribe((data) => {
        this.edit = true;
      })
    } else {
      this.edit = false;
    }
  }
}
