import { Component,OnInit ,ViewEncapsulation} from '@angular/core';
import { Http, Headers, RequestOptions, Response,URLSearchParams} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
    templateUrl: './mypage.component.html',
    styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {
  // displayStyle = 'none';
  // editorContent = '';
  articleDropdownSwitchindex = true;
  // constructor(private router: Router,
  //   private http: Http,
  //   private userService:UserService) {

  // }
  articleDropdownSwitch(){
    this.articleDropdownSwitchindex = !this.articleDropdownSwitchindex;
  }
  // closeRightMenu(){
  //    this.displayStyle = 'none';
  // }
  // openRightMenu(){
  //   this.displayStyle = 'block';
  // }
  // public options: Object = {
  //   placeholderText: 'Edit Your Content Here12121!',
  //   charCounterCount: false,
  //   language: 'zh_cn',
  //   height: 700,
  //   heightMax: 800
  // }

  // submitTopic(){
  //   let urlSearchParams = new URLSearchParams();
  //   urlSearchParams.append('articleName', "test01");
  //   urlSearchParams.append('articleContent', this.editorContent);
  //   this.userService.submitArticle(urlSearchParams).then(res => {
  //     console.log(res)
  //   })
  // }
    ngOnInit() {

    }
}