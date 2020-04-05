import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private dbPath = '/articles';

  articlesRef: AngularFirestoreCollection<Article> = null;

  constructor(private db: AngularFirestore) {
    this.articlesRef = db.collection(this.dbPath);
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

  deleteAll() {
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
