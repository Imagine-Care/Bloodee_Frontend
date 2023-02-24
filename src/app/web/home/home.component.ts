import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private tokenService: TokenStorageService,
    private router : Router
  ) { }

  ngOnInit(): void {
    if(!!!this.tokenService.getToken()){
      console.log("TOKEN EXIST");
      this.router.navigate(
        ['/login']
      )
    }

    // this.openDailyDialog();
  }
  selectright() {
    console.log("SELECT EXECISE");
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
    }).then(()=>{
      console.log("SELECTED");
    })
  }
  selectleft() {
    console.log("SELECT FOOD");
  }

  openDailyDialog() {
    // const dialogRef = this.dialog.open(DialogDailyCouponComponent, {
    //   width: '800px',
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

}
