import {Component} from '@angular/core';

@Component({
  templateUrl: './email-page.component.html',
  styleUrls: ['./email-page.component.sass']
})
export class EmailPageComponent {
  public email = '';
  public showSuccessMessage = false;

  public sendEmail() {
    this.email = '';
    this.showSuccessMessage = true;
  }
}
