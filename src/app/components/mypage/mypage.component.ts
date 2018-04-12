import { Component,OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import cplayer from 'cplayer';

@Component({
    templateUrl: './mypage.component.html',
    styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
    public editor;
    public editorContent = `<h3>I am Example content</h3>`;
    public playlist = [];
    public editorOptions = {
      placeholder: "insert content..."
    };
    constructor(
        private http: Http
    ) {}
  
    onEditorBlured(quill) {
      console.log('editor blur!', quill);
    }
  
    onEditorFocused(quill) {
      console.log('editor focus!', quill);
    }
  
    onEditorCreated(quill) {
      this.editor = quill;
      console.log('quill is ready! this is current quill instance object', quill);
    }
  
    onContentChanged({ quill, html, text }) {
      console.log('quill content is changed!', quill, html, text);
    }
  
    ngOnInit() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
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
                        src:response.json().Body[i].url,
                        poster:response.json().Body[i].pic,
                        name:response.json().Body[i].title,
                        artist:response.json().Body[i].author,
                    });
                }
                let player = new cplayer({
                    element: document.getElementById('app3'),
                    big: true,
                    showPlaylist:true,
                    autoplay:true,
                    volume:0.2,
                    playlist: this.playlist
                });
            }
        )
    }
}