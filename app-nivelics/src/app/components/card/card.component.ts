import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  description: string;
  image: string;
  name: string;
  // tslint:disable-next-line: variable-name
  url_article: string;
  items: [];


  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getArticle();
  }

  getArticle(){
   this.api.getData()
    .subscribe( resp => {
      
      // tslint:disable-next-line: no-string-literal
      const listArticle = resp['result']['articles_pymes_test'];
      this.items = listArticle;
      listArticle.forEach(element => {
        // tslint:disable-next-line: no-string-literal
        this.description = element['description'];
        // tslint:disable-next-line: no-string-literal
        this.image = element['image'];
        // tslint:disable-next-line: no-string-literal
        this.name = element['name'];
        this.url_article = element['url_article '];
      });
    });
  }

}
