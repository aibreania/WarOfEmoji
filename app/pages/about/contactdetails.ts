import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/about/contactdetails.html'
})
export class ContactDetails {

  constructor(private navparams: NavParams, private nav: NavController)
  {
    let item = navparams.data.item;
  }

  popView(){
    this.nav.pop();
  }

}
