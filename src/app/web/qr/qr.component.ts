import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.scss']
})
export class QrComponent implements OnInit {

  constructor(
    private tokenService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.tokenService.redirectlogin();

  }

}
