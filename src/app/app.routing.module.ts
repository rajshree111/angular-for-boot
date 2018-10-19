import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BladesviewComponent} from './bladesview/bladesview.component';
import {RightclickComponent} from './rightclick/rightclick.component';
import {BladesViewsComponent} from './blades-views/blades-views.component';
import {DragscrollComponent} from './dragscroll/dragscroll.component';
import {HomeComponent} from './home/home.component';
import {FmViewComponent} from './fm-view/fm-view.component';
import {BaseComponent} from './base/base.component';




const routes: Routes = [
  
  { path: '', component: BaseComponent },
  { path: 'cm/bladeview', component: BladesviewComponent },
  { path: 'pm/form', component: RightclickComponent },
  { path: 'blades/rightclick', component: BladesViewsComponent },
  { path: 'blades/dragscroll', component: HomeComponent },
  { path: 'rightclick2/test', component: FmViewComponent }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
