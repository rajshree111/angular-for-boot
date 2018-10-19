import { Component} from '@angular/core';
import { ContextMenuService, ContextMenuComponent } from '../../lib';
import {BladeViewService} from '../bladesview/bladeview.service';

@Component({
  selector: 'app-blades-views',
  templateUrl: './blades-views.component.html',
  styleUrls: ['./blades-views.component.css'],
})
export class BladesViewsComponent  {

  public LockStatus ="UnLock";

  public items: any[] = [
    {

    }
  ]

  constructor(private contextMenuService: ContextMenuService, private bladeViewservices: BladeViewService ) { }
  ngOnInit() {
    this.bladeViewservices.getFetchData().subscribe(
      data => console.log("*************"+data[0].powerStatus)
    );
    this.bladeViewservices.getObservable().subscribe(data=>console.log("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"+data.subscribe(
      data=> console.log("^^^^^^^^"+data[0].powerStatus)
    )))
  }

  public lockUnlock(message: any, data?: any): void {
    console.log(message, data);
  }
  public reboot(message: any, data?: any): void {
    console.log(message, data);
  }


  getLockUnlockOption(i: number) {

    return this.LockStatus;

  }


  getpowerstatus(i: number) {
   return 'reboot_in_progress';
    }

}

