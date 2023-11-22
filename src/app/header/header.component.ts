import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/Auth/auth-manager.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private authService: AuthService) {}
  isUserLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  }

  onLogout(){
    this.authService.logout();
  }
  ngOnInit() {
  }
}
