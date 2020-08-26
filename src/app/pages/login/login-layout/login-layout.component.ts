import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {LoginService} from '../../../services/biz-services/login.service';
import {EVENT_KEY} from 'src/environments/staticVariable';


@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.less']
})
export class LoginLayoutComponent implements OnInit {
  validateForm: FormGroup;
  sysName = environment.sysName;
  sysNamePinYin = environment.sysNamePinYin;

  constructor(private fb: FormBuilder, private router: Router, private dataService: LoginService) {
  }

  public async submitForm() {
    Object.keys(this.validateForm.controls).forEach(key => {
      if (this.validateForm.controls[key]) {
        this.validateForm.controls[key].markAsDirty();
        this.validateForm.controls[key].updateValueAndValidity();
      }
    });
    if (this.validateForm.invalid) {
      return;
    }
    const params = this.validateForm.getRawValue();
    await this.dataService.UserLogin(params).subscribe((res) => {
      window.sessionStorage.setItem(EVENT_KEY.loginInfo, JSON.stringify(res));
      this.router.navigate(['/welcome']);
      // this.router.navigate(['/main-page']);
    });

  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      account: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

}
