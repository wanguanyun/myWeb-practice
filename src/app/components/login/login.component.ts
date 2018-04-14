import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule,NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;

  public login():void{
    this.authenticationService.login(this.username, this.password)
            .subscribe(result => {
                if (result) {
                  this.router.navigate(['/mypage']);
                } else {
                    console.log("error");
                }
            });
    
  }

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    this.authenticationService.logout();
  }
}