import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {

  key: string;
  private subscription: Subscription;
  article: any;

  constructor(private activatedRoute: ActivatedRoute, private articleService: ArticleService) {
      this.subscription = activatedRoute.params.subscribe(params => this.key = params.key);
  }

  ngOnInit() {
    this.articleService.articlesRef.doc(this.key).ref.get().then(doc => {
      this.article = doc.data();
    });
  }
}
