import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dragscroll',
  templateUrl: './dragscroll.component.html',
  styleUrls: ['./dragscroll.component.css']
})
export class DragscrollComponent implements OnInit {

  imagelist = [
    'server.jpg',
    'Desert.jpg',
    'Jellyfish.jpg',
    'Koala.jpg' ,
    'Tulips.jpg',
  ];

  constructor() { }

  ngOnInit() {
  }

  clickItem(item) {
    console.log('itmen clicked');
  }

}
