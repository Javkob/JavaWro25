import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from "@angular/fire/auth";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

@Injectable({providedIn: 'root'})
export class LoginComponent implements OnInit {
    loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });

  constructor(public af: AngularFireAuth, private router: Router) {

  }

  ngOnInit(): void {
  }
  submit(){
    this.af.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then(()=>{
        this.router.navigate(['home'])
      })
      .catch(console.log);
  }

}
