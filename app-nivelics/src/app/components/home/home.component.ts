import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  description: string;
  title: string;
  ppal: string;
  testimony: string;

  constructor(
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this.api.getData()
    .subscribe( resp => {
      // tslint:disable-next-line: no-string-literal
      const result = resp['result'];
      // tslint:disable-next-line: no-string-literal
      this.title = result['test_title'];
      // tslint:disable-next-line: no-string-literal
      this.ppal = result['title_ppal'];
      // tslint:disable-next-line: no-string-literal
      this.description = result['test_description'];
      // tslint:disable-next-line: no-string-literal
      this.testimony = result['title_testimony'];
    });
  }



}
