import { Component, OnInit } from '@angular/core';
import { UserServices } from './services/user.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserServices]
})
export class AppComponent implements OnInit {
  title = 'app';
  public identity;
  public token;


  constructor(private _userService: UserServices) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    console.log(this.token)
    console.log(this.identity)
  }

  ngOnInit() {
    console.log("App Componet cargado")
  }
}
