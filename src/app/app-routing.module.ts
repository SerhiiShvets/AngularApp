import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { NewsFeedComponent } from './articles/news-feed/news-feed.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'add', component: CreateArticleComponent},
  { path: 'articles', component: NewsFeedComponent},
  { path: 'articles/:key', component: ArticleDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
