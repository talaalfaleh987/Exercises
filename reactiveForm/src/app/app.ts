import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('reactiveForm');

  // create form group
  userForm: FormGroup= new FormGroup({
fullName: new FormControl("",[Validators.required,Validators.minLength(3)]),
emailId:new FormControl("",[Validators.required,Validators.email]),
password:new FormControl("",[Validators.required,Validators.minLength(8)]),
age: new FormControl(0,[Validators.required,Validators.min(18)]),
acceptTerm: new FormControl(false,[Validators.required, Validators.requiredTrue]),

  });

  onSubmit(){
    console.log(this.userForm.valid);
  alert("The Form Submitted successfully :) ");
  }
  ngOnInit(): void {
    console.log(this.userForm.get('acceptTerm')?.errors);

  }
}
