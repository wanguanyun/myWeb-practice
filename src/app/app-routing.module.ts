import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MypageComponent } from './components/mypage/mypage.component';
import { MusicPlayerComponent } from './components/plugins/music.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './components/services/auth.guard';
import { ModifyArticleComponent } from './components/mypage/article/modifyArticle.component';
import { ShowArticleComponent } from './components/mypage/article/showArticle.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'header', component: HeaderComponent},
    { path: 'musicplayer', component: MusicPlayerComponent},
    { path: 'mypage', component: MypageComponent,canActivate: [AuthGuard],children:[
        {path: 'articleEdit', component: ModifyArticleComponent},
        {path: 'articleList', component: ShowArticleComponent}
    ]},
    // { path: 'home', component: HomeComponent,canActivate: [AuthGuard]}
    { path: 'home', component: HomeComponent,children:[
       
    ]}
    // {path: 'pagination',component: PaginationComponent},
    // { path: 'home',  component: HomeComponent,children:[
    //     {path: 'main', component: MainComponent},
    //     {path: 'manager', component: ManagerComponent}
    // ] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }