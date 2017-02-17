import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule, Http, Headers } from '@angular/http';
import { AppModule } from './app.module';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

platformBrowserDynamic().bootstrapModule(AppModule);
