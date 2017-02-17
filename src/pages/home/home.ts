import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { Http, Headers } from '@angular/http';
import { HttpModule, JsonpModule } from '@angular/http';

var headers = new Headers();
headers.append("Authorization", "bearer b06a369e874557b4d8272134b51d5fcf6365473979375d573870a9f9ade0b700");

@Component({
    templateUrl: 'home.html'
})
export class HomePage {

    http: Http;


    constructor(private oAuthService: OAuthService, http: Http) {
    }
    public henk() {
        window.alert("bier");
    }
    public login() {
        this.oAuthService.initImplicitFlow();

    }

    public logoff() {
        this.oAuthService.logOut();
    }


    getName() {
      this.http.get('http://localhost:3005/api/v1/user')
      .map(user => user.json())

    }
}
