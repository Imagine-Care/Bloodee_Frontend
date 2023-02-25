import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainService } from 'src/app/services/main.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cheat_data = {};
  food_data = {};
  img = {
    'left': '',
    'right': ''
  }
  cheat_id = 0;
  food_id = 0;
  daily_select = 0;
  day_to_donation = 0;
  constructor(
    private dialog: MatDialog,
    private tokenService: TokenStorageService,
    private router: Router,
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.tokenService.redirectlogin();
    this.callData();
    // this.openDailyDialog();
  }

  callData() {
    this.mainService.getTodayData().subscribe((data) => {
      console.log(data);
      var last_donation = data.user.last_donation;

      var today = new Date();
      var last_donation_date = new Date(last_donation);
      var diff = today.getTime() - last_donation_date.getTime();
      var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
      var cheat_days_count = data.user.cheat_day_quota

      this.day_to_donation = (30 + cheat_days_count) - diffDays;

      console.log(this.day_to_donation)


      this.daily_select = data.user.daily_select;
      this.cheat_id = data.user.daily_cheat;
      this.food_id = data.user.daily_food;
      this.mainService.getCheat(data.user.daily_cheat).subscribe((cheat_data) => {
        this.cheat_data = cheat_data;
        this.img.left = cheat_data.cheat.coupon_img
      })
      this.mainService.getFood(data.user.daily_food).subscribe((food_data) => {
        this.food_data = food_data;
        this.img.right = food_data.food.coupon_img
      })
    })
  }

  selectright() {
    if (this.daily_select != 2) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          // daily select = 2
          this.mainService.updateDailySelect(2, this.cheat_id, this.food_id).subscribe((data) => { })
          this.daily_select = 2;
          this.openQRDialog();
        }
      })
    } else {
      this.openQRDialog();
    }
  }
  selectleft() {
    if (this.daily_select != 1) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          // daily select = 1
          this.mainService.updateDailySelect(1, this.cheat_id, this.food_id).subscribe((data) => { })
          this.daily_select = 1;
          this.openQRDialog();
        }
      })
    } else {
      this.openQRDialog();
    }
  }

  openQRDialog() {
    const dialogRef = this.dialog.open(DialogQRCodeComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

@Component({
  selector: 'dialog-qrcode',
  templateUrl: './dialog-qrcode.html',
})

export class DialogQRCodeComponent implements OnInit {
  constructor(private mainService: MainService) { }
  coupon_data = {
    name: '',
    discount: '',
    img: '',
  }
  ngOnInit(): void {
    this.callData();
  }

  callData() {
    this.mainService.getDailyCoupon().subscribe((data) => {
      this.coupon_data.name = data.coupon.name;
      this.coupon_data.discount = data.coupon.discount;
      this.coupon_data.img = data.coupon.coupon_img;

    })
  }

}
