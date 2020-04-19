import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ArticleComponent } from './articles/article/article.component';
import { CreateArticleComponent } from './articles/create-article/create-article.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NewsFeedComponent } from './articles/news-feed/news-feed.component';
import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { ArticlesDataService } from './shared/articles-data.service';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { ArticleService } from '../app/articles/article.service';
import { SourcesSelectorComponent } from './sources-selector/sources-selector.component';
import { FilterPipe } from './filter.pipe';

import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FilterSelectorPipe } from './filter-selector.pipe';
import { SearchComponent } from './search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { UpdateArticleComponent } from './articles/update-article/update-article.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyB5YCqOdDYx_Y6_87JIVOfkLh4JKT4kWzw',
  authDomain: 'my-angular-app-ca09d.firebaseapp.com',
  databaseURL: 'https://my-angular-app-ca09d.firebaseio.com',
  projectId: 'my-angular-app-ca09d',
  storageBucket: 'my-angular-app-ca09d.appspot.com',
  messagingSenderId: '848590614299',
  appId: '1:848590614299:web:ae92c46f51be687001edbe'
};

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CreateArticleComponent,
    ToolbarComponent,
    NewsFeedComponent,
    SourcesSelectorComponent,
    FilterPipe,
    FilterSelectorPipe,
    SearchComponent,
    ArticleDetailComponent,
    UpdateArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatNativeDateModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],

  providers: [ArticlesDataService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
