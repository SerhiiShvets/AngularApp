import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Article } from './article';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private dbPath = '/articles';
  public articles: Observable<any[]>;
  article: any;
  articles2: Article[];

  private _data: BehaviorSubject<Article[]>;
  public data: Observable<Article[]>;
  latestEntry: any;

  articlesCollection: AngularFirestoreCollection<Article>;
  firstInResponse: any;
  lastInResponse: any;
  tableData: any[];
  prev_strt_at: any[];
  pagination_clicked_count: number;
  disable_next: boolean;
  disable_prev: boolean;

  constructor(private db: AngularFirestore) {
    this.articlesCollection = this.getArticlesList(db);
  }

  getArticlesList(db: AngularFirestore): AngularFirestoreCollection<Article> {
    return db.collection(this.dbPath, ref => ref
      .limit(3)
      .orderBy('date', 'desc'));
  }

  getArticlesListPrevious(startPosition, endPosition): AngularFirestoreCollection<Article> {
    return this.db.collection(this.dbPath, ref => ref
      .orderBy('date', 'desc')
      .startAt(startPosition)
      .endBefore(endPosition)
      // .limit(3)
    );
  }

  getArticlesListNext(startPosition): AngularFirestoreCollection<Article> {
    return this.db.collection(this.dbPath, ref => ref
      .orderBy('date', 'desc')
      .startAfter(startPosition)
      .limit(3));
  }

  getNextArticle(position): AngularFirestoreCollection<Article> {
    return this.db.collection(this.dbPath, ref => ref
      .startAfter(position)
      .limit(1));
  }

  getArticleByKey(key: string) {
    this.articlesCollection.doc(key).ref.get().then(doc => {
      if (doc.exists) {
        console.log('Document data:', doc.data());
      } else {
        console.log('No such document!');
      }
    }).catch((error) => {
      console.log('Error getting document:', error);
    });
  }

  addArticle(article: Article): void {
    this.articlesCollection.add({...article});
  }

  updateArticle(key: string, value: Article): Promise<void> {
    return this.articlesCollection.doc(key).update(value);
  }

  removeArticle(key: string): Promise<void> {
    return this.articlesCollection.doc(key).delete();
  }

  removeAll() {
    this.articlesCollection.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }

  // Add document
  push_prev_startAt(prev_first_doc) {
    this.prev_strt_at.push(prev_first_doc);
  }

  // Remove not required document
  pop_prev_startAt(prev_first_doc) {
    this.prev_strt_at.forEach(element => {
      if (prev_first_doc.data().id === element.data().id) {
        element = null;
      }
    });
  }

  // Return the Doc rem where previous page will startAt
  get_prev_startAt() {
    if (this.prev_strt_at.length > (this.pagination_clicked_count + 1)) {
      this.prev_strt_at.splice(this.prev_strt_at.length - 2, this.prev_strt_at.length - 1);
    }
    return this.prev_strt_at[this.pagination_clicked_count - 1];
  }

  // Date formate
  readableDate(time) {
    const d = new Date(time);
    return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear();
  }
}
