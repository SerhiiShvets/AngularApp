import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Source } from '../source';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css'],
})
export class CreateArticleComponent implements OnInit {

  article: Article = new Article();
  articleForm: FormGroup;

  sources: Source[] = [
    {id: '0-r', name: 'Reuters'},
    {id: '1-afp', name: 'Agence France-Presse'},
    {id: '2-ap', name: 'Associated Press'}
  ];

  constructor(private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
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
    // this.article.heading = this.articleForm.value.heading;
    // this.article.date = this.articleForm.value.date;
    // this.article.shortDescription = this.articleForm.value.shortDescription;
    // this.article.author = this.articleForm.value.author;
    // this.article.content = this.articleForm.value.content;
    // this.article.sourceUrl = this.articleForm.value.sourceUrl;
    // this.article.sourceName = this.articleForm.value.sourceName;

    this.articleService.addArticle(this.article);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['/articles']);
  }
}
