import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  isRegisFailed = false;
  form: any = {
    username: '',
    email: '',
    password: '',
  };
  constructor(
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(
      this.form.email,
      this.form.username,
      this.form.password
    ).subscribe((data)=>{
      if(data.status){
        this.tokenService.saveToken(data.token);
        this.isRegisFailed = false;
        this.route.navigate(['']);
      }else {
        this.isRegisFailed = true;

      }
    })
  }
}
