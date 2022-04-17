import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder,private route:Router, private http: HttpClient) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.edu')]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm(postData:any) {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {

      var form = postData;

      this.http.post("localhost:5154/login", form).subscribe((response)=>{
        console.log(response);
      });

      this.route.navigate(['/tabnav']);
      return false;
    } else {
      console.log(this.ionicForm.value);
    }
  }

}
