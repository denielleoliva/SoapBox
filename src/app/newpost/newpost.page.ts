import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.page.html',
  styleUrls: ['./newpost.page.scss'],
})

export class NewpostPage implements OnInit {
  timeLeft: number = 300;
  interval;
  subscribeTimer: any;

  constructor() { }
  

  ngOnInit() {
    var obj;
    fetch('./assets/dummy.json').then(res => res.json())
    .then(json => {
      obj = json;
  });

  }


}
