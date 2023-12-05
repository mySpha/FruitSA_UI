import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmLogoutComponent } from '../auth/components/confirm-logout/confirm-logout.component';

@Component({
  selector: 'app-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent {
constructor (private dialog: MatDialog){}

open(){
  this.dialog.open(ConfirmLogoutComponent)
}
}
