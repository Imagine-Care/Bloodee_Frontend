import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
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
    const dialogRef = this.dialog.open(DialogDailyCouponComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

@Component({
  selector: 'dialog-daily-coupon',
  templateUrl: 'dialog-daily-coupon.html',
})
export class DialogDailyCouponComponent {
  constructor() { }

}
