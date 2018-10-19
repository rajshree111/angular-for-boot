import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {HttpClientModule} from '@angular/common/http';
import { DragScrollModule } from 'ngx-drag-scroll';


import { ContextMenuModule } from '../lib';
import {RightclickComponent} from './rightclick/rightclick.component';
import {BladesviewComponent} from './bladesview/bladesview.component';
import {BladeViewService} from './bladesview/bladeview.service';
import { BladesViewsComponent } from './blades-views/blades-views.component';
import { DragscrollComponent } from './dragscroll/dragscroll.component';
import {HomeComponent} from './home/home.component';
import { FmViewComponent } from './fm-view/fm-view.component';
import { FmViewService } from './fm-view/fm-view.service';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    RightclickComponent,
    BladesviewComponent,
    BladesViewsComponent,
    DragscrollComponent,
    HomeComponent,
    FmViewComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ContextMenuModule.forRoot({
      autoFocus: true,
      // useBootstrap4: true,
    }),
    DragScrollModule
  ],
  providers: [BladeViewService,FmViewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
