import { Component, OnInit } from '@angular/core';
import { Gebruiker } from '../../../core/models/gebruiker.model';
import { AuthenticateService } from '../../../core/security/authenticate.service';
import { Router } from '@angular/router';
import { GebruikerLogin } from '../../../core/models/gebruikerlogin.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login-pagina',
  templateUrl: './login-pagina.component.html',
  styleUrls: ['./login-pagina.component.scss']
})
export class LoginPaginaComponent implements OnInit {

  gebruiker: GebruikerLogin = new GebruikerLogin('', '');
  myForm: FormGroup;
  unauthorized = false;
  error: {};
  hide = true;

  constructor(private formBuilder: FormBuilder, private _authenticateService: AuthenticateService, private router: Router) {
    this.myForm = this.formBuilder.group({
      email: new FormControl('',[
        Validators.required]),
      wachtwoord: ['', [Validators.required]]
    });
  }


  ngOnInit() {
    // auto login 
    if (this._authenticateService.isLoggedIn) {
      // check token expiration
      var token = (JSON.parse(localStorage.getItem("gebruiker")) as Gebruiker).token;
      var decodedToken = jwt_decode(token);
      if(+decodedToken['exp'] > Date.now()/1000){
        // TODO: refresh token
        this.router.navigate(['application']);
      }
      else
        this.error = "Inlogsessie vervallen";
    }
  }

  onLogin() {
    this._authenticateService.authenticate(this.gebruiker).subscribe(result => {
      localStorage.setItem("gebruiker", JSON.stringify(result));
      if (this._authenticateService.isLoggedIn) {
        const redirect = this._authenticateService.redirectUrl ? this._authenticateService.redirectUrl : 'application'; // redirect url bepalen
        this.router.navigate([redirect]);
      }
    }, error => this.error = error);
  }
}
