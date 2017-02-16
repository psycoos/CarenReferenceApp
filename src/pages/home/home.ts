import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { OAuthService } from 'angular2-oauth2/oauth-service';


@Component({
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(private oAuthService: OAuthService) {
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

    public get name() {
        let claims = this.oAuthService.getIdentityClaims();
        if (!claims) return null;
        return claims.given_name;
    }

}
