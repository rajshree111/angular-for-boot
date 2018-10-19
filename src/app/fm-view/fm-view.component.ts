import { Component, OnInit,HostListener } from '@angular/core';
import { FmViewService } from './fm-view.service';

@Component({
  selector: 'app-fm-view',
  templateUrl: './fm-view.component.html',
  styleUrls: ['./fm-view.component.css']
})
export class FmViewComponent implements OnInit {

  @HostListener('window:beforeunload', ['$event'])
   beforeunloadHandler(event) {
  
    this.saveTheData();
    event.returnValue = false
  }


  data: any;

  constructor(private fmViewService: FmViewService) { }

  ngOnInit() {
   this.data= this.fmViewService.testTheThunder();
   console.log("fm-view############################this.data::: ",this.data);
  }

  saveTheData(){
    this.fmViewService.saveTheData();
  }

}
