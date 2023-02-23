import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './web/login/login.component';
import { ForgotpassComponent } from './web/forgotpass/forgotpass.component';
import { RegisterComponent } from './web/register/register.component';
import { HomeComponent } from './web/home/home.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
