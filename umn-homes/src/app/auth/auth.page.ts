import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;
  isLogin = true;
  
  constructor(
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.authService.login();
  }

  onLogin() {
    this.isLoading = true;
    this.loadingCtrl.create({keyboardClose: true, message: 'Logging in...'})
      .then(loadingEl => {
        loadingEl.present();
        setTimeout(() => {
          this.isLoading = false;
          loadingEl.dismiss();
          this.router.navigateByUrl('/places/tabs/discover');
        }, 1500);
      })
    this.authService.login();
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    console.log(email, password);

    if(this.isLogin) {
      //send request to login server
    }
    else {
      //send request to signup server
    }
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

}