import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent implements OnInit {
  isLoginFailed = false;
  form: any = {
    username: '',
    email: '',
    password: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

}
