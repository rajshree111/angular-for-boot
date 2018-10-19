import { Component, OnInit, ElementRef, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { DragScrollDirective } from '../../../src/ngx-drag-scroll';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  viewProviders: [MatIconRegistry]
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'app works!';
  hideScrollbar;
  disabled;
  xDisabled;
  yDisabled;
  imagelist = [
    'server.jpg',
    'Desert.jpg',
    'Jellyfish.jpg',
    'Koala.jpg' ,
    'Tulips.jpg',
    'server.jpg',
    'Desert.jpg',
    'Jellyfish.jpg',
    'Koala.jpg' ,
    'Tulips.jpg',
    'server.jpg',
    'Desert.jpg',
    'Jellyfish.jpg',
    'Koala.jpg' ,
    'Tulips.jpg',
    'server.jpg',
    'Desert.jpg',
    'Jellyfish.jpg',
    'Koala.jpg' ,
    'Tulips.jpg',
  ];
  leftNavDisabled = false;
  rightNavDisabled = false;

  dragScrollDom: any;
  dragScrollRef: ElementRef;
  dragScroll: DragScrollDirective;

  @ViewChild('nav', {read: DragScrollDirective}) ds: DragScrollDirective;

  constructor(
    matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    matIconRegistry
        .addSvgIcon('github',
            sanitizer.bypassSecurityTrustResourceUrl('/assets/img/github.svg'))
        .registerFontClassAlias('fontawesome', 'fa');
  }


  ngOnInit() {
    Observable.interval(2000).takeWhile(() => true).subscribe(() =>{this.ds.moveRight(); console.log("called....")});
  }
  ngOnDestroy(){

  }

  clickItem(item) {
    console.log('itmen clicked');
  }

  remove() {
    this.imagelist.pop();
  }

  toggleHideSB() {
    this.hideScrollbar = !this.hideScrollbar;
  }

  toggleDisable() {
    this.disabled = !this.disabled;
  }
  toggleXDisable() {
    this.xDisabled = !this.xDisabled;
  }
  toggleYDisable() {
    this.yDisabled = !this.yDisabled;
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    Observable.interval(1000).takeWhile(() => true).subscribe(() => this.ds.moveRight());

  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

}
