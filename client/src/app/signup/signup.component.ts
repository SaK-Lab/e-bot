import { Component, OnInit } from '@angular/core';
import { Login } from '../models/Login';
import { Signup } from '../models/Signup';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/finally';
import { Router } from '@angular/router';

// Service
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    username = new FormControl();
    password = new FormControl();
    password_confirm = new FormControl();
    singupForm: FormGroup;

  constructor(
    private _auth: AuthService,
    private _fb: FormBuilder,
    private _router: Router
  ) { }


  ngOnInit() {
      this.initForm();
  }

  initForm(): void {
    this.singupForm = this._fb.group({
        'user_name': this.username,
        'password': this.password,
        'password_confirm': this.password_confirm
    });
  }

  onSubmitSignup(signupData): void {
      console.log(this.makePostData(signupData));
    this._auth.signUp(this.makePostData(signupData))
        .subscribe(
            succ => {
                console.log(succ);
            },
            err => console.log(err),
            () => {
                this._auth.signIn({
                    user_name: signupData.user_name,
                    password: signupData.password
                }).subscribe(
                        success => {
                            localStorage.setItem('user_id', success.user_id);
                            localStorage.setItem('token', success.token);
                        },
                        err => console.log(err),
                        () => {
                            this._router.navigateByUrl('/');
                        }
                    );
            }
        );
  }

  makePostData(value): Signup {
    return {
        user: this.singupForm.value
    };
  }

}
