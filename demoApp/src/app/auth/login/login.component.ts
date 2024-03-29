import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;


  constructor(private router:Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'password':new FormControl(null,Validators.required)
    });

  }

  onSubmit(){
    console.log(this.loginForm);
    if(this.loginForm.value.email === 'maulikdikshit013@gmail.com' && this.loginForm.value.password == 'Rebel@402'){
      console.log('form submitted');
      this.router.navigate(['home']);
      
    }
  }

}
