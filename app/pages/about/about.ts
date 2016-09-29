import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ContactDetails} from '../about/contactdetails';

@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {

  public contacts = [
    {"contactid": 1, "contactname": '张三', "contacttext": 13800000000},
    {"contactid": 2, "contactname": '李四', "contacttext": 13800000001},
  ]

  constructor(public navCtrl: NavController) {
  }

  itemClick(event, contact){
      this.navCtrl.push(ContactDetails, {item:contact});
  }

}
