import { Component } from '@angular/core';
import { ContextMenuService, ContextMenuComponent } from '../lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private contextMenuService: ContextMenuService) { }
  title = 'the POC app to replace CONFD';
}
