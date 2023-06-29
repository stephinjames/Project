import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailId: string = "Step@gmail.com";
  password: string = "Stephin@123";
  inputValueEmail: string = '';
  inputValuePass: string = '';
  showPassword: boolean = false;
  signInClicked: boolean = false;

  showHide(): void {
    this.showPassword = !this.showPassword;
  }

  signIn(): void {
    debugger
    this.signInClicked = true;
    if ((this.inputValueEmail && this.inputValuePass) === "") {
      return;
    } else {
      if (this.emailId === this.inputValueEmail && this.password === this.inputValuePass) {
        alert("Password is correct");
      } else {
        alert("Incorrect email or password");
      }
    }

  }
}
