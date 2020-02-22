import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { ArticleComponent } from './article/article.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { SourcesSelectorComponent } from './sources-selector/sources-selector';
import {MatSelectModule} from '@angular/material/select';
import { CreateArticleComponent } from './create-article/create-article.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ArticleComponent,
    NewsFeedComponent,
    SourcesSelectorComponent,
    CreateArticleComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
