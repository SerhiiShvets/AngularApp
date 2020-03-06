import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ArticleComponent } from './article/article.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { SourcesSelectorComponent } from './sources-selector/sources-selector';
import { CreateArticleComponent } from './create-article/create-article.component';

import { ArticlesDataService } from './articles-data-service/articles-data.service';


import { MatSelectModule } from '@angular/material/select';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FilterModule } from './filter/filter.module';
import { NewsFeedModule } from './news-feed/news-feed.module';

const appRoutes: Routes =[
  { path: '', component: AppComponent},
  { path: 'add', component: CreateArticleComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ArticleComponent,
    NewsFeedComponent,
    SourcesSelectorComponent,
    CreateArticleComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    Ng2SearchPipeModule,
    FilterModule,
    NewsFeedModule
  ],
  providers: [ArticlesDataService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
