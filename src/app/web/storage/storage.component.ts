import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

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
  constructor(
    private tokenService:TokenStorageService
  ) { }

  ngOnInit(): void {
    this.tokenService.redirectlogin();
  }

}
