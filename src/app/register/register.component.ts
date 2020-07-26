import {Component, Injectable, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})

export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  });
  error = false;

  constructor(public af: AngularFireAuth, private router: Router) {

  }

  register() {
      this.af.createUserWithEmailAndPassword(this.registerForm.value.email, this.registerForm.value.password)
        .then(() => {
          this.router.navigate(['home']);
        })
        .catch(() => {
          this.error = true;
        });
  }

  ngOnInit(): void {
  }

}
