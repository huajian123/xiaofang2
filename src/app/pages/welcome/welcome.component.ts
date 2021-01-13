import {Component, OnInit} from '@angular/core';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation, flashAnimation, hueRotateAnimation,
  rollInAnimation,
  rollOutAnimation,
  rotateInDownLeftOnEnterAnimation,
  rubberBandAnimation, rubberBandOnEnterAnimation,
  zoomInDownOnEnterAnimation,
  zoomInLeftAnimation,
  zoomInUpOnEnterAnimation
} from 'angular-animations';
import {Router} from '@angular/router';
import {EVENT_KEY} from '../../../environments/staticVariable';
import {LoginService} from '../../services/biz-services/login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less'],
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    rotateInDownLeftOnEnterAnimation({anchor: 'enter'}),
    zoomInDownOnEnterAnimation({anchor: 'enterLetterAnim1'}),
    fadeInOnEnterAnimation({anchor: 'enterLetterAnim2'}),
    zoomInUpOnEnterAnimation({anchor: 'enterLetterAnim3'}),
    rollInAnimation({anchor: 'letterAnim1'}),
    zoomInLeftAnimation({anchor: 'letterAnim2'}),
    rubberBandAnimation({anchor: 'letterAnim3'}),
    hueRotateAnimation({anchor: 'hueLetter', duration: 5000}),
    flashAnimation({anchor: 'flash'}),
    rubberBandOnEnterAnimation({anchor: 'btnEnter', delay: 500}),
    fadeInOnEnterAnimation({anchor: 'btnEnterFadeIn', delay: 3500, duration: 500})
  ]
})
export class WelcomeComponent implements OnInit {
  /* text1 = '江苏省应急管理厅'.split('');*/
  text2 = '欢迎进入分级应对决策辅助系统'.split('');
  text3 = '江苏国恒集团技术支持'.split('');
  animationState = false;
  hueState = false;
  flashState = false;

  constructor(private router: Router, private dataService: LoginService) {
  }

  getDelay(index, lenght) {
    if (index < lenght / 2 - 2) {
      return index * 100;
    } else {
      return lenght * 100 - index * 100;
    }
  }

  animate() {
    this.animationState = false;
    setTimeout(() => {
      this.animationState = true;
    }, 1);
  }

  goHome() {
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    const params = {account: 'admin', password: '123'};
    this.dataService.UserLogin(params).subscribe((res) => {
      window.sessionStorage.setItem(EVENT_KEY.loginInfo, JSON.stringify(res));
    });
  }

}
