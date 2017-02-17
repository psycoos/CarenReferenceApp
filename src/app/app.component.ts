import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { OAuthModule } from 'angular-oauth2-oidc';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { Http, Headers } from '@angular/http';
import { HttpModule, JsonpModule } from '@angular/http';
import {URLSearchParams} from '@angular/http';



@Component({
  templateUrl: 'app.html',
  providers: [OAuthService]
})
export class AppComponent {
  rootPage = HomePage;
  constructor(private oauthService: OAuthService) {
    // Login-Url
    this.oauthService.loginUrl = "http://localhost:3005/login/oauth/authorize"; //Id-Provider?

    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = "http://localhost:8100";

    // The SPA's id. Register SPA with this id at the auth-server
    this.oauthService.clientId = "2ad67a674daa335ca26f2cb7c5a2b67ec11e0dfcdc6d541ae8aef107d6582939";

    // set the scope for the permissions the client should request
    this.oauthService.scope = "person";

    // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // OAuth2-based access_token
    this.oauthService.oidc = false;

    // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // instead of localStorage
    this.oauthService.setStorage(sessionStorage);

    // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
    //this.oauthService.logoutUrl = "https://steyer-identity-server.azurewebsites.net/identity/connect/endsession?id_token={{id_token}}";

    // This method just tries to parse the token(s) within the url when
    // the auth-server redirects the user back to the web-app
    // It dosn't send the user the the login page
    this.oauthService.tryLogin({
      onTokenReceived: context => {
        //
        // Output just for purpose of demonstration
        // Don't try this at home ... ;-)
        //
        console.debug("logged in");
        console.debug(context);
      },

    });
  }
}
export class MyApp {
  rootPage = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
