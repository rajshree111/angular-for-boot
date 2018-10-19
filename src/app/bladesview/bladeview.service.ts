import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

import { BladeView } from '../models/bladeview.model';
import {CmRcactionModel} from '../models/cm.rcaction.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Origin' : '*' })
};

@Injectable()
export class BladeViewService {
  subscription : Subscription;
  observable : Observable<object> ;
  observer : Observer<object>;
  mySubject: Subject<object>;

  test:BehaviorSubject<any> =new BehaviorSubject(null);

  public getObservable(){
    return new BehaviorSubject(this.getBladeView());
  }



  constructor(private http: HttpClient) {}

  private bladeviewUrl = 'http://localhost:9999/getallblade';
  private performactionUrl = 'http://10.53.197.234:8080/performaction';
  //private userUrl = '/api';
  data: any;

  public getBladeView() {
    const headers1 = new HttpHeaders().set("Content-Type", "application/json");
    console.log("#####################"+new Date()+"####",this.http.get<BladeView[]>(this.bladeviewUrl));
    this.subscription = this.http.get<BladeView[]>(this.bladeviewUrl).subscribe(data => {
     // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*********"+data[0].powerStatus+"$$$$$$S"+data[1].powerStatus);
    }, () => console.log('.....error')
    );

    return this.http.get<BladeView[]>(this.bladeviewUrl);
  }

public getDetails(){
      return {'name':'rajesh','age':30};
}


  public testView(){
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@',this.data);
    this.http.get<BladeView[]>(this.bladeviewUrl).subscribe(data => {
      // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$*********"+data[0].powerStatus+"$$$$$$S"+data[1].powerStatus);
     
    this.data=data;
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@',this.data);
    this.test.next(data);
    }, () => console.log('.....error')
     );
     return this.test.asObservable();
  }

  public setBladeAction(bladeId: number, actionName: string){

    console.log("action requested ############# for "+bladeId+"#####"+actionName);

    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this.http.post(this.performactionUrl, JSON.stringify({"bladeId" : bladeId,"actionName" : "reboot"}),{headers}).subscribe();
 }


 public getFetchData(){
   const httpStream = Observable.create(observer => {

     fetch(this.bladeviewUrl)
       .then(response => response.json())
       .then(data => {
         observer.next(data); // if http call provides progress as well as completion
                              // these can all be pushed with observer.next()
         console.log("######"+data[0].powerStatus+"######"+data[1].powerStatus);

         observer.complete();
       })
       .catch(err => observer.error(err));

   });

   return httpStream;
 }
}
