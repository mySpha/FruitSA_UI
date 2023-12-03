import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @Output() submitEM = new EventEmitter();
  public loginForm!: FormGroup;

  constructor(private fb: FormBuilder){}
  
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm = this.fb.group({
      'email': new FormControl(null),
      'password': new FormControl(null)
    })
  }

  onSubmit(loginForm : FormGroup){}
}
