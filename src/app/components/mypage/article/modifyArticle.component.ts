import { Component,OnInit ,ViewEncapsulation} from '@angular/core';
import { Http, Headers, RequestOptions, Response,URLSearchParams} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
    templateUrl: './modifyArticle.component.html',
    styleUrls: ['./modifyArticle.component.css']
})
export class ModifyArticleComponent implements OnInit{
    displayStyle = 'none';
    editorContent = '';
    slideIndex = 1;
    constructor(private router: Router,
      private http: Http,
      private userService:UserService) {
  
    }
    currentDiv(index){
        this.slideIndex = index;
    }
    closeRightMenu(){
       this.displayStyle = 'none';
    }
    openRightMenu(){
      this.displayStyle = 'block';
    }
    public options: Object = {
      placeholderText: 'Edit Your Content Here12121!',
      charCounterCount: false,
      language: 'zh_cn',
      height: 500,
      heightMax: 500
    }
  
    submitTopic(){
      let urlSearchParams = new URLSearchParams();
      urlSearchParams.append('articleName', "test01");
      urlSearchParams.append('articleContent', this.editorContent);
      this.userService.submitArticle(urlSearchParams).then(res => {
        console.log(res)
      })
    }
    ngOnInit() {

    }
}