import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AppComponent } from './app.component';
import { HomePage } from '../pages/home/home';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HttpModule }      from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(AppComponent),
    OAuthModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AppComponent,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {

}
