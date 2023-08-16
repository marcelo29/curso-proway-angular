import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificaoService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  notifcar(msg: string){
    this.snackBar.open(msg, "Ok", {
      duration:200,
      verticalPosition: 'top',
      horizontalPosition: 'center'
    });
  }
}
