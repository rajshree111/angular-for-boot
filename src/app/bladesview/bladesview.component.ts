import {Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';


import {Router} from '@angular/router';
import {BladeViewService} from './bladeview.service';
import {BladeView} from '../models/bladeview.model';
import {ContextMenuService} from '../../lib';

@Component({
  selector: 'app-bladesview',
  templateUrl: './bladesview.component.html',
  styleUrls: ['./bladesview.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class BladesviewComponent implements OnInit, OnDestroy {
  data: any;
  public items: any[] = [
    {

    }

  ]
  public LockStatus ="UnLock";
  bladeviews: BladeView[];

   constructor(private router: Router, private bladeViewservices: BladeViewService, private contextMenuService: ContextMenuService ) { }

  ngOnInit() {

    console.log("############services:::",this.bladeViewservices.getDetails());

    this.bladeViewservices.getBladeView()
      .subscribe( data => {
        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"+data);
        //this.bladeviews = data;
        //this.data=data;
        //console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$"+this.bladeviews[0].powerStatus+"$$$$$$S"+this.bladeviews[1].powerStatus);
      }, () => console.log('.....error') );

  
     this.bladeViewservices.testView().subscribe(
data=>{

  this.data=data;
  console.log("%%%%%%%%%%%%%",new Date());
  console.log("%%%%%%%%%%%%%",this.data);
}
     );

//this.data = this.bladeViewservices.testView();

    const fata = this.bladeViewservices.getFetchData().subscribe(data=>console.log("data::::::::::::::::::::::;"+data[0].powerStatus+"&&&&&&&&&&&&&&&&&"+data[1].powerStatus));
    console.log("fata:::::::::::::::::::::;"+typeof fata); //what is fata, what kind of object


  }



  getpowerstatus(i: number) {
    //console.log('power status of ' + this.bladeviews[ ( i - 1 ) ].bladeId + '........' + this.bladeviews[ ( i - 1 ) ].powerStatus);
   //  if (typeof (this.bladeviews) !== 'undefined') {
   //  return this.bladeviews[ ( i - 1 ) ].powerStatus;

    //
   // }
    return 'reboot_in_progress';
  }

  ngOnDestroy() {
  }


  public lockUnlock(bladeId: number, action: string): void {
    console.log(action, bladeId);
    this.bladeViewservices.setBladeAction(bladeId,action);

  }
  public reboot(bladeId: number): void {
    console.log('reboot', bladeId);
    this.bladeViewservices.setBladeAction(bladeId,'reboot');
  }

  getLockUnlockOption(i: number) {

    return this.LockStatus;

  }
}
