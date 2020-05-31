import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Source } from '../source';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  sources: Source[] = [
    {id: '0-r', name: 'Reuters'},
    {id: '1-afp', name: 'Agence France-Presse'},
    {id: '2-ap', name: 'Associated Press'}
  ];

  key: string;
  private subscription: Subscription;
  article: any;

  // article: Article = new Article();
  articleForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService, private router: Router) {
    this.subscription = activatedRoute.params.subscribe(params => this.key = params.key);
  }

  ngOnInit() {
    this.articleService.articlesCollection.doc(this.key).ref.get().then(doc => {
      this.article = doc.data();
    });

    this.articleForm = new FormGroup({
      heading: new FormControl(),
      date: new FormControl(),
      shortDescription: new FormControl(),
      author: new FormControl(),
      content: new FormControl(),
      sourceUrl: new FormControl(),
      sourceName: new FormControl(),
    });
  }

  onSubmit(): void {
    this.articleService.updateArticle(this.key, this.article);
    this.onCancel();
  }

  updateArticle(article: Article) {
    this.articleService
      .updateArticle(article.key, article)
      .catch(err => console.log(err));
  }

  onCancel() {
    this.router.navigate(['/articles']);
  }

}
