import {Component, OnInit} from '@angular/core';
import {ApiManagerService} from "../services/Api/api-manager.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: any = {}
  loginError: string = '';


  constructor(private api: ApiManagerService, private router: Router) {
  }

  ngOnInit() {
  }

  onRegister() {
    const {email, password, lastName, firstName} = this.user;
    if (!email || !password || !lastName || !firstName) {
      this.loginError = 'Veuillez fournir un email et un mot de passe.';
      return;
    }
    this.api.registration(email, password,lastName, firstName)
      .then(response => {
        this.router.navigateByUrl('login')
      })
      .catch(error => {
        console.error('Erreur de connexion:', error);
      });
  }


}
