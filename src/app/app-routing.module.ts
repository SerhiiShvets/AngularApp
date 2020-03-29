import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArticleComponent } from './create-article/create-article.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';


// const routes: Routes = [];
const routes: Routes = [
  { path: 'add', component: CreateArticleComponent},
  { path: 'articles', component: NewsFeedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
