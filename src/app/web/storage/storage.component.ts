import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss']
})
export class StorageComponent implements OnInit {
  coupons: any = [{
    id: 1,
    discount : "50 Baht",
    name: "Coupon 1",
    descrition: "Lorem ",
  },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
