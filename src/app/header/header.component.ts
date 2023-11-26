import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/Auth/auth-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn = this.authService.isUserLoggedIn();

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/');
  }

  ngOnInit() {
  }
}
