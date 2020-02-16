import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  signstatus: string = 'signin'
  toVerifyEmail: boolean = false;
  userName: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSignUp() {
    this.signstatus = 'signup';
  }

  onSignIn() {
    this.signstatus = 'signin';
  }

  singUpToAWS(email: HTMLInputElement, contactNo: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement) {

    this.userName = username.value;

    const user = {
      username: username.value,
      password: password.value,
      attributes: {
        email: email.value,          // optional
        phone_number: contactNo.value,
      }
    }


    Auth.signUp(user)
      .then(data => {
        console.log(data);
        this.toVerifyEmail = true;
        this.signstatus = "";
      })
      .catch(err => console.log(err));
  }

  onVerify(verifycode: HTMLInputElement) {
    Auth.confirmSignUp(this.userName, verifycode.value, {
      // Optional. Force user confirmation irrespective of existing alias. By default set to True.
      forceAliasCreation: true
    }).then(data => {
      console.log(data)
      this.toVerifyEmail = false;
      this.signstatus = 'signin'
    })
      .catch(err => console.log(err));
  }

  signInToAWS(email: HTMLInputElement, password: HTMLInputElement) {

    const authInfo = {
      username: email.value,
      password: password.value
    }

    Auth.signIn(authInfo).then(user => {
      console.log(user);
      this.route.navigate(['/home'])
    })
      .catch(err => console.log(err));

  }


}