import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../service/token-storage.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              //private snackbar: MatSnackBar,
              private router: Router,
              private tokenStorage: TokenStorageService) {
    if (this.tokenStorage.getUser()) {
      this.router.navigate(['']);
    }
  }

  ngOnInit(): void {
    this.registerForm = this.createRegisterForm();
  }

  createRegisterForm():FormGroup{
    return this.formBuilder.group({
      username: ['',Validators.compose([Validators.required])],
      password: ['',Validators.compose([Validators.required])],
      confirmPassword: ['',Validators.compose([Validators.required])]
    })
  }

  submit(): void{
    this.authService.register({
      username:this.registerForm.value.username,
      password: this.registerForm.value.password,
      confirmPassword: this.registerForm.value.confirmPassword
    }).subscribe(data=>{this.router.navigate(['login'])},error => {})
  }
}
