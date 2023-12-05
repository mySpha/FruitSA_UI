import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { GetUser } from '../../auth-state-manager/auth.actions';
import { Router } from '@angular/router';
import { UserState } from '../../auth-state-manager/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @Output() submitEM = new EventEmitter();
  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router){}
  
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm = this.fb.group({
      'email': new FormControl('',[Validators.required,Validators.email]),
      'password': new FormControl('',Validators.required)
    })
  }

  onSubmit(loginForm : FormGroup){
    if(loginForm.valid){
      this.store.dispatch(new GetUser(loginForm.value)).subscribe(()=>{
        this.store.select(UserState.getUser).subscribe(token =>{
          if(token){
            this.router.navigate(['category/summary'])
          }
       
        })
      })
    }
  }
}
