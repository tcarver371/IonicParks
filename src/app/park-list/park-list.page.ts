import { Component, OnInit } from '@angular/core';
import {ParkData} from '../providers/park-data';
import{ Router} from '@angular/router';


@Component({
  selector: 'app-park-list',
  templateUrl: './park-list.page.html',
  styleUrls: ['./park-list.page.scss'],
})
export class ParkListPage implements OnInit {
   parks: Array<Object> = []
   searchQuery : string = '';
  
// Also Creates some kind of error. 
// Won't display the parks page
// This assignment is a bit tough and it's going to be rather incomplete when I submit it.
// Any feedback/help would be appreciated.

   constructor(public parkData: ParkData, public router: Router) { 
     parkData.getParks().then(theResult => {
       this.parks = theResult;
     })
   }
   goParkDetails(theParkData){
     let url = '/tabs/details/' + theParkData.id
     this.router.navigate([url]);
 
    }
getParks(event){
  this.parkData.getParks().then(theResult =>  {
    this.parks = theResult;
  })
  let queryString = event.target.value;

  if(queryString !== undefined){
    if(queryString.trim() == ''){
      return;
    }
    this.parkData.getFilteredParks(queryString).then(theResult => {
      this.parks = theResult;
    })
  }
}

  ngOnInit() {
  }

}
