import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router, private _FormBuilder: FormBuilder) { }
  errMsg: string = '';
  isLoading: boolean = false;
  loginForm: FormGroup = this._FormBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_@]{6,}$/)]]
  })

handleForm(): void {
  console.log(this.loginForm.value)
    const userData = this.loginForm.value;
  this.isLoading = true;
  if(this.loginForm.valid === true) {
  this._AuthService.login(userData).subscribe({
    next: (Response) => {
      if (Response.message == 'success') {

        localStorage.setItem('eToken', Response.token);
        this._AuthService.decodeUser();

        this.isLoading = false;
        this._Router.navigate(['/home'])
      }
    },
    error: (err) => {
      this.errMsg = err.error.message;
      this.isLoading = false;
    },
  });
}
  }
}
