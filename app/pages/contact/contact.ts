import {Component} from '@angular/core';
import {LoadingController, ToastController, ModalController} from 'ionic-angular';
import {Register} from '../contact/register';
/*import {ImagePicker} from 'ionic-native';*/


@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

  public user = {
      username: '',
      password: '',
      headface: 'images/3.jpg'
  }

  constructor(private loadingCtrl: LoadingController, private toastCtrl: ToastController, private modalCtrl: ModalController) {
  }


  login(){
      if(this.user.username == ''){
        let toast = this.toastCtrl.create({
          message: 'name unqualified',
          duration: 3000
        });
        toast.present();
      } else {
          let loading = this.loadingCtrl.create({
              content: "正在登录...",
              duration: 3000,
              spinner: "dots"
          });
          loading.present(loading);
          setTimeout(() => {
              loading.dismiss();
          }, 3000);
     }
  }

  openRegisterPage(){
     let modal = this.modalCtrl.create(Register);
     modal.present();
  }

  /*uploadImage() {
    ImagePicker.getPictures().then((result) => {
      for(var i = 0; i < result.length; i++) {
        this.user.headface = result[i];
      }
    })
  }*/

}
