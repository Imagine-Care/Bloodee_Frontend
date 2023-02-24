import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    // this.openDailyDialog();
  }


openDailyDialog(){
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
  constructor() {}

}