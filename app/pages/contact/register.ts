import {Component} from '@angular/core';
import {Page, ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/register.html'
})

export class Register {


    static get parameters(){
      return [[ViewController]];
    }

    constructor(private viewCtrl: ViewController){
    }

    dismiss(){
      this.viewCtrl.dismiss();
    }
}
