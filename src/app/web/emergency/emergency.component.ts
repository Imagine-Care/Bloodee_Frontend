import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss']
})
export class EmergencyComponent implements OnInit {

  constructor(
    private tokenService: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.tokenService.redirectlogin();
  }

}
