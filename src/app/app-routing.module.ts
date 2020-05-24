import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { NewsFeedComponent } from './articles/news-feed/news-feed.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { UpdateArticleComponent } from './articles/update-article/update-article.component';
// import { from } from 'rxjs';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full'},
  { path: 'add', component: CreateArticleComponent},
  { path: 'articles', component: NewsFeedComponent},
  { path: 'articles/:key', component: ArticleDetailComponent},
  { path: 'articles/update/:key', component: UpdateArticleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
