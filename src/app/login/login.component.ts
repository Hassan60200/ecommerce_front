import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../services/Api/api-manager.service";
import {AuthService} from "../services/Auth/auth-manager.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {}
  loginError: string = '';
  constructor(private api: ApiManagerService, private authService: AuthService) {
  }

  ngOnInit() {
  }
  onLogin() {
    const { username, password } = this.user;
    console.log(username, password)

    if (!username || !password) {
      this.loginError = 'Veuillez fournir un email et un mot de passe.';
      return;
    }

    this.api.authenticate(username, password)
      .then(response => {
        console.log('Connexion réussie:', response);
      })
      .catch(error => {
        console.error('Erreur de connexion:', error);
        this.loginError = 'Email ou mot de passe incorrect.';
      });
  }
}
