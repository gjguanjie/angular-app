import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder ,AbstractControl,FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private validateForm: FormGroup

  constructor(
    private router: Router,
    @Inject(forwardRef(() => FormBuilder)) private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      password: [ '', [this.passwordValidator] ],
      mail: [ '', [this.emailValidator] ],
    })
  }

  submit(): void {
    console.log(this.validateForm.value)
  }
  
  reset(): void {
    this.validateForm.reset()
  }
  
  ctrl(item: string): AbstractControl {
    return this.validateForm.controls[item]
  }
  
  statusCtrl(item: string): string {
    if (!this.validateForm.controls[item]) return
    const control: AbstractControl = this.validateForm.controls[item]
    return control.dirty && control.hasError('status') ? control.errors.status : ''
  }
  
  messageCtrl(item: string): string {
    if (!this.validateForm.controls[item]) return
    const control: AbstractControl = this.validateForm.controls[item]
    return control.dirty && control.hasError('message') ? control.errors.message : ''
  }

  private emailValidator = (control: FormControl): any => {
    const mailReg: RegExp = /^[A-Za-z0-9]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
    if (!mailReg.test(control.value)) {
      return { status: 'error', message: '邮箱格式不正确' }
    }
    return { status: 'success',message: '' }
  }
  
  private passwordValidator = (control: FormControl): any => {
    if (!control.value) {
      return { status: 'error', message: '密码是必填的' }
    }
    if (control.value.length < 6) {
      return { status: 'error', message: '密码长度必须大于 6 位' }
    }
    return { status: 'success',message: '' }
  }
  

  goToLogin () {
    console.log(this.validateForm)
    // sessionStorage.setItem('username','admin')
    // this.router.navigate(['index'])
  }

}

