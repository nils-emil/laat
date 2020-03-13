import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmailPageComponent} from './email-page/email-page.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: EmailPageComponent },
  { path: '**', redirectTo: '/home' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
