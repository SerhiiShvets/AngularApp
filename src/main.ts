import 'hammerjs';
import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {SourcesSelectorModule} from './app/sources-selector/sources-selector.module';
import {SourcesSelectorComponent} from './app/sources-selector/sources-selector';
import {AppComponent} from './app/app.component';
import { ArticleComponent } from './app/article/article.component';
import { NewsFeedComponent } from './app/news-feed/news-feed.component';
import { CreateArticleComponent } from './app/create-article/create-article.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SourcesSelectorModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  entryComponents:[SourcesSelectorComponent],
  declarations: [AppComponent,
                SourcesSelectorComponent,
                ArticleComponent,
                NewsFeedComponent,
                CreateArticleComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
  ]
})
export class AppModule {}

// if (environment.production) {
//   enableProdMode();
// }

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
