import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navCtrl: NavController) {

  }

     /* onPageLoaded(){
        console.log("page 1 page loaded");
      }

      onPageWillEnter(){
        console.log("page 1: page will enter");
      }

      onPageDidEnter(){
        console.log("page 1: page did enter");
      }

      onPageWillLeave(){
        console.log("page 1: page will leave");
      }

      onPageDidLeave(){
        console.log("page 1: page did leave");
      }

      onPageWillUnload(){
        //从DOM中移除的时候执行的生命周期
      }

      onPageDidUnload(){
        //DOM中移除执行完成的时候
      }*/
}
