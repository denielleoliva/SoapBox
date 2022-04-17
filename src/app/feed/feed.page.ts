import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  data: any;
  constructor() { }

  ngOnInit() {
    fetch('./assets/dummy.json').then(res => res.json())
    .then(json => {
      this.data = json;
  });

}

}
