import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {fromEvent} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-flood-drought-one',
  templateUrl: './flood-drought-one.component.html',
  styleUrls: ['./flood-drought-one.component.less']
})
export class FloodDroughtOneComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc: Document, private router: Router) {
  }

  ngOnInit(): void {
    fromEvent(this.doc, 'click').subscribe(() => {
      this.router.navigate(['/home']);
    });
  }

}
