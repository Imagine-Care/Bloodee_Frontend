import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './web/login/login.component';
import { ForgotpassComponent } from './web/forgotpass/forgotpass.component';
import { RegisterComponent } from './web/register/register.component';
import { HomeComponent } from './web/home/home.component';
import { StorageComponent } from './web/storage/storage.component';
import { HistoryComponent } from './web/history/history.component';
import { ProfileComponent } from './web/profile/profile.component';
import { MapComponent } from './web/map/map.component';
import { QrComponent } from './web/qr/qr.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpass', component: ForgotpassComponent },
  { path: 'storage', component: StorageComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'map', component: MapComponent },
  { path: 'qr', component: QrComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
