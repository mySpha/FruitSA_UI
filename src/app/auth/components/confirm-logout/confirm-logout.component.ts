import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { Logout } from '../../auth-state-manager/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-logout',
  templateUrl: './confirm-logout.component.html',
  styleUrls: ['./confirm-logout.component.scss']
})
export class ConfirmLogoutComponent {
  
  constructor(
    public dialogRef: MatDialogRef<ConfirmLogoutComponent>,
    private store: Store,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(): void {
    this.store.dispatch(new Logout())
    this.router.navigate(['auth/login'])
    this.dialogRef.close();
  }
}
