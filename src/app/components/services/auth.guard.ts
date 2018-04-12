import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private http: Http,
        private authenticationService:AuthenticationService,
        private userService:UserService) { }

    canActivate() {
        if (!localStorage.getItem('currentUser')){
            this.router.navigate(['/login']);
            return false;
        }
        return this.userService.checkToken().then((response) => {
            return response
        })
    }
}