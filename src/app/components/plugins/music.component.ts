import { Component, Input ,OnInit} from '@angular/core';
import APlayer from 'APlayer';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserService } from '../services/user.service';
@Component({
    selector: 'music-player',
    template: `
      <div id={{musicDivId}}></div>
    `
})
export class MusicPlayerComponent implements OnInit{
    @Input() musicDivId: string;
    public playlist = [];
    public player;
    ngOnDestroy(){
        if(this.player){
            this.player.destroy();
        }
    }
    constructor(private http: Http,
      private userService: UserService) {
    }
    
    ngOnInit() {
      this.userService.getMusicList().then(res => {
        for(let i=0;i<res.length;i++){
          this.playlist.push({
              url:res[i].url,
              cover:res[i].pic,
              name:res[i].title,
              artist:res[i].author,
              lrc:res[i].lrc
          });
      }
      this.player = new APlayer({
        element: document.getElementById(this.musicDivId),
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
    });
    }
  
}