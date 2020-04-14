import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Article } from './article';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private dbPath = '/articles';
  article: any;

  articlesRef: AngularFirestoreCollection<Article> = null;

  constructor(private db: AngularFirestore) {
    this.articlesRef = db.collection(this.dbPath);
  }

  getArticleById(id: string) {
    const tmp = '/articles/' + id;
    this.article = this.db.collection(tmp)
    .snapshotChanges()
    .pipe(map(items => {
      return items.map(a => {
        console.log(a.payload);
        //return a.payload.doc;
      });
    }));
  }

  getArticleByKey(key: string) {
    this.articlesRef.doc(key).ref.get().then(doc => {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }

  addArticle(article: Article): void {
    this.articlesRef.add({...article});
  }

  updateArticle(key: string, value: any): Promise<void> {
    return this.articlesRef.doc(key).update(value);
  }

  removeArticle(key: string): Promise<void> {
    return this.articlesRef.doc(key).delete();
  }

  getArticlesList(): AngularFirestoreCollection<Article> {
    return this.articlesRef;
  }

  removeAll() {
    this.articlesRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
}
