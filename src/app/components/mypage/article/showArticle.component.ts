import { Component,OnInit ,ViewEncapsulation} from '@angular/core';
import { Http, Headers, RequestOptions, Response,URLSearchParams} from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    templateUrl: './showArticle.component.html',
    styleUrls: ['./showArticle.component.css']
})
export class ShowArticleComponent implements OnInit{
    ngOnInit() {

    }
}