import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { OAuthService } from 'angular2-oauth2/oauth-service';
import { Http, Headers } from '@angular/http';
import { HttpModule, JsonpModule } from '@angular/http';
import { User, UserService } from '../../providers/user-service';


@Component({
    templateUrl: 'home.html',
    providers: [UserService, UserService]
})
export class HomePage {
    public user: User;




    constructor(private oAuthService: OAuthService, public userService: UserService) {
      //this.loadUser();
    }
    public henk() {
        console.log(this.user);
    }
    public login() {
        this.oAuthService.initImplicitFlow();

    }

    public logoff() {
        this.oAuthService.logOut();
    }

    // loadUser(){
    //   console.log('het werrkt (half)');
    //   this.userService.load().subscribe((user:User)=>{
    //     this.user=user;
    //   });
    //   console.log(this.user);
    // }



}
