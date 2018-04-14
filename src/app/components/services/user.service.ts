import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { User } from '../models/user';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class UserService {
    constructor(
        private router: Router,
        private http: Http,
        private authenticationService: AuthenticationService) {
    }
    getUsers(): Observable<String> {
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token 
        ,'Content-Type':'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });
        // get users from api
        return this.http.get('http://118.24.6.132:8080/checktoken', options)
            .map((response: Response) => response.text());
    }

    checkToken():Promise<boolean>{
        // add authorization header with jwt token
        let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token 
        ,'Content-Type':'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });
        // get users from api
        return this.http.get('http://118.24.6.132:8080/checktoken', options)
        .toPromise().then((response) => true,() => {
            this.router.navigate(['/login']);
            return false;
        });
    }
    getMusicList():Promise<Response>{
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        const data = new FormData();
        data.append("TransCode", "020112");
        data.append("OpenId", "123456789");
        data.append("Body[SongListId]", "134860692");
        return this.http.post('https://api.hibai.cn/api/index/index',
        data,{ headers: headers }).toPromise().then(
            response=> response);
    }
}