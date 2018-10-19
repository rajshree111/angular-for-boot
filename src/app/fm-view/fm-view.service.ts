import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { BladeView } from '../models/bladeview.model';

@Injectable()
export class FmViewService {

    private bladeviewUrl = 'http://localhost:9999/getallblade';
    data: any;

    constructor(private http: HttpClient) {}

    public call(){
        this.http.get<BladeView[]>(this.bladeviewUrl).subscribe(data => {
            this.data=data;
        }, () => console.log('.....error')
        );

    }

    public testTheThunder() {
        if(this.data===undefined){
           if(localStorage.getItem('data')!=null){
            this.data = JSON.parse(localStorage.getItem('data'));
           }
        }
        
        return this.data;
      }

      saveTheData(){
          localStorage.setItem('data',JSON.stringify(this.data));
      }

}

