import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Resource, assert, root } from 'hyperagent';
import { Resource } from '../../bower_components/hyperagent/dist/amd'


var api = new Resource({
  url: 'http://localhost:3005/api/v1/user',
  headers: { 'Accept': 'application/hal+json',
          'Authorization': 'bearer b06a369e874557b4d8272134b51d5fcf6365473979375d573870a9f9ade0b700'}

});

api.fetch().then(function (root) {
  console.log('API root resolved:', root);
  assert(root.url() === 'http://localhost:3005/api/v1/user');
}, function (err) {
  console.warn('Error fetching API root', err);
});

// var headers = new Headers();
// headers.append('Authorization', 'bearer b06a369e874557b4d8272134b51d5fcf6365473979375d573870a9f9ade0b700');
/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class User {

}
@Injectable()
export class UserService {



  constructor(public http: Http) {
    console.log('Hello UserService Provider');
    this.http=http
  }

  logThings() {
    var contents = root.embedded['person'].map(function (post) {
      console.log(post.props.content);
    });

  }
  // load() {
  //   return this.http.get('http://localhost:3005/api/v1/user',{headers: headers})
  //                   .map((res:Response) => res.json());
  //
  //       //var obj = JSON.parse(res.json());
  // }
  //private extractData(res: Response) {
  //  let body = res.json();
  //  console.log(body)

  //}


}
