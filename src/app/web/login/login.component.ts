import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoginFailed = false;
  form: any = {
    username: '',
    password: '',
  };
  constructor(
    private authService: AuthService,
    private tokenService: TokenStorageService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    if(!!this.tokenService.getToken()){
      this.router.navigate(
        ['/']
      )
    }
  }

  login() {
    this.authService.login(this.form.username, this.form.password).subscribe(
      (data) => {
        if(data.status){
          this.tokenService.saveToken(data.token);
          this.tokenService.saveUser(data.user);
          this.isLoginFailed = false;
          this.router.navigate([""])
        }else{
          this.isLoginFailed = true;
        }
      }
    )

  }

}
