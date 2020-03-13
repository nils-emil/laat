import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './email-page.component.html',
  styleUrls: ['./email-page.component.sass']
})
export class EmailPageComponent {
  public email = '';
  public showSuccessMessage = false;

  constructor(private router: Router) {}

  public navigateToRoot() {
    this.router.navigate(['']);
    window.scroll({ top: 0, behavior:  'smooth'});
  }

  public sendEmail() {
    this.email = '';
    this.showSuccessMessage = true;
  }
}
