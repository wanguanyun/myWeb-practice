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
export class HomeComponent implements OnInit,OnDestroy  {
  constructor(
    private userService: UserService,
    private http: Http) {
    }
    public playlist = [];
    public player;
    log:String;
    title = 'app';
    isCollapsed = false;
    ngOnDestroy(){
        console.log(this.player)
        if(this.player){
            this.player.destroy();
        }
    }
    ngOnInit() {
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      const data = new FormData();
      data.append("TransCode", "020112");
      data.append("OpenId", "123456789");
      data.append("Body[SongListId]", "134860692");
      this.http.post('https://api.hibai.cn/api/index/index',
      data,{ headers: headers }).toPromise().then(
          response=> {
              console.log(response.json());
              for(let i=0;i<response.json().Body.length;i++){
                  this.playlist.push({
                      url:response.json().Body[i].url,
                      cover:response.json().Body[i].pic,
                      name:response.json().Body[i].title,
                      artist:response.json().Body[i].author,
                      lrc:response.json().Body[i].lrc
                  });
              }
              this.player = new APlayer({
                  element: document.getElementById('app3'),
                  lrcType: 3,
                  mini: false,
                  theme: '#FADFA3',
                  mutex: true,
                  listFolded: false,
                  autoplay:false,
                  order:'random',
                  volume:0.2,
                  width:'100%',
                  audio: this.playlist
              });
          }
      )
  }
}