import {Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { load } from '@angular/core/src/render3';

@Injectable()
export class ParkData{
    data: any = null;

    constructor(public http: Http){
        }

load(){
    if(this.data) {
        return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
        this.http.get('assets/data/data.json')
        .map(res => res.json())
        .subscribe(data => {
            this.data = data;
            resolve(this.data);

        });
    });
}
getParks(){
    return this.data.load().then(data => {
        return data;
    });

}
getFilteredParks(queryString){
    return this.load().then(Parks => {
        let theFilteredParks: any = [];

        for (let thePark of Parks){
            if(thePark.name.toLowerCase().indexOf(queryString.toLowerCase()) > -1){

            }
        }
        return theFilteredParks;
    });
}
}

