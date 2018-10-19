import { Component, OnInit } from '@angular/core';
import { FmViewService } from '../fm-view/fm-view.service';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private fmViewService:FmViewService) { }

  ngOnInit() {
    this.fmViewService.call();
  }

}
