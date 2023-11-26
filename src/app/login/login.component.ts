import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../services/Api/api-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {}
  loginError: string = '';

  constructor(private api: ApiManagerService, private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    const {username, password} = this.user;

    if (!username || !password) {
      this.loginError = 'Veuillez fournir un email et un mot de passe.';
      return;
    }

    this.api.authenticate(username, password)
      .then(response => {
        this.router.navigateByUrl('products')
      })
      .catch(error => {
        console.error('Erreur de connexion:', error);
        this.loginError = 'Email ou mot de passe incorrect.';
      });
  }
}
