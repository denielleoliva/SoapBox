import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  data: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    fetch('./assets/dummy.json').then(res => res.json())
    .then(json => {
      this.data = json;
  });


  // const headerDict = {
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   'corssorigin': 'anonymous',
  //   'Access-Control-Allow-Methods': 'GET. POST'
  // };

  // const requestOptions = {
  //   headers: new HttpHeaders(headerDict)
  // };

  // this.http.get("http://localhost:34261/api/posts",requestOptions).subscribe((result) => {
  //   var json = JSON.stringify(result);
  //   console.log(json);
  //   var object = JSON.parse(json);

  // });

}

}
