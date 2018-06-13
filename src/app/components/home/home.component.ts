import { Component,OnInit,OnDestroy } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import APlayer from 'APlayer';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  constructor(
    private userService: UserService,
    private http: Http) {
    }
    log:String = 'wgy';
    title = 'app';
    musicDivId = 'musicDiv';
    isCollapsed = false;

    ngOnInit() {
        
  }
}