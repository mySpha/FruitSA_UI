import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AddUser } from '../../auth-state-manager/auth.actions';
import { Store } from '@ngxs/store';
import { Router } from '@angular/router';
import { passwordValidator } from '../../validators/password.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
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
      'email': new FormControl('', [Validators.required,Validators.email]),
      'password': new FormControl('', [Validators.required, passwordValidator()])
    })
  }

  onSubmit(loginForm : FormGroup){
    if(loginForm.valid){
      console.log(loginForm.value)
      this.store.dispatch(new AddUser(loginForm.value)).subscribe(()=>{  
            this.router.navigate(['auth/login'])       
      })
    }
  }

}
