import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
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
