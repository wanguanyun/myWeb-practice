import { Component,OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

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

    }
}