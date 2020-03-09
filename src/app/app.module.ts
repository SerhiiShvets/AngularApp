import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { ArticlesDataService } from './shared/articles-data.service';
import { from } from 'rxjs';
import { SourcesSelectorComponent } from './sources-selector/sources-selector.component';
import { FilterPipe } from './filter.pipe';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const appRoutes: Routes =[
  { path: '', component: AppComponent},
  { path: 'add', component: CreateArticleComponent},
];

// export const firebaseConfig {
//   apiKey: "AIzaSyB5YCqOdDYx_Y6_87JIVOfkLh4JKT4kWzw",
//   authDomain: "my-angular-app-ca09d.firebaseapp.com",
//   databaseURL: "https://my-angular-app-ca09d.firebaseio.com",
//   projectId: "my-angular-app-ca09d",
//   storageBucket: "project-id.appspot.com",
//   messagingSenderId: "sender-id",
//   appId: "848590614299",
//   measurementId: "G-measurement-id",

// };

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    CreateArticleComponent,
    ToolbarComponent,
    NewsFeedComponent,
    SourcesSelectorComponent,
    FilterPipe
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
    AngularFireDatabaseModule
  ],

  providers: [ArticlesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }


