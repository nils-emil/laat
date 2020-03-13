import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  constructor(private router: Router) {}

  public scrollTop() {
    this.router.navigate(['']);
    window.scroll({ top: 0, behavior:  'smooth'});
  }

  public navigateToEmailpage() {
    this.router.navigate(['about']);
  }

}
