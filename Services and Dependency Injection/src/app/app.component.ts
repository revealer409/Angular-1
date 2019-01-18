import { Component } from '@angular/core';
import { AccountService } from './account.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
accounts: {name: string, status: string} []  = [];
 constructor(private accountsService: AccountService) {}

 // tslint:disable-next-line:use-life-cycle-interface
 ngOnInit() {
  this.accounts = this.accountsService.accounts;
 }
}
