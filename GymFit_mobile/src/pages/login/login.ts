import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController, AlertController } from 'ionic-angular';

import { MainPage } from '../../pages/pages';

import { User } from '../../providers/user';
import { AngularFireAuth } from 'angularfire2/auth';

import { TranslateService } from '@ngx-translate/core';

import { Account } from '../../models/account'


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type

  // account = {} as Account;
  account: Account = {
    name: '',
    email: 'test@example.com',
    password: '123456'
  };

  // Our translated text strings
  private loginErrorString: string;

  constructor(
    private AFauth: AngularFireAuth,
    public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })
  }

  // Attempt to login in through our User service
  // doLogin() {
  //   this.user.login(this.account).subscribe((resp) => {
  //     this.navCtrl.push(MainPage);
  //   }, (err) => {
  //     this.navCtrl.push(MainPage);
  //     // Unable to log in
  //     let toast = this.toastCtrl.create({
  //       message: this.loginErrorString,
  //       duration: 3000,
  //       position: 'top'
  //     });
  //     toast.present();
  //   });
  // }
  async doLogin(account: Account) {
    //create loading spinner
    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      spinner: 'crescent',
    });
    try {
      loading.present();
      const result = await this.AFauth.auth.signInWithEmailAndPassword(account.email, account.password);
      console.log(result);
      if (result) {
        loading.dismiss();
        this.navCtrl.push(MainPage);
      }
    }
    catch (e) {
      this.presentAlertErrorLoading(e);
      loading.dismiss();
      console.error(e);
    }
  }

  presentAlertErrorLoading(error) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: error,
      buttons: ['OK']
    });
    alert.present();
  }
}
