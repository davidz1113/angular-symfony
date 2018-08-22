import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../models/user';
import { UserServices } from '../services/user.services'

@Component({
    selector: 'Register',
    templateUrl: '../views/register.html',
    providers: [UserServices]
})
export class RegisterComponent implements OnInit {
    public title: string;
    public user: User;
    public status;
    public msg;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserServices
    ) {
        this.title = 'Registro';
        this.user = new User(1, "user", "", "", "", "");
    }
    ngOnInit(): void {
        console.log('El componente register ha sido creado');
        this._userService.redirectIfIdentity(this._router);
    }


    onSubmit() {
        console.log(this.user);
        this._userService.register(this.user).subscribe(
            response => {
                this.status = response.status;
                if (response.status != 'Success') {
                    this.status = 'error';
                    this.msg = response.msg;
                }
            },
            error => {
                console.log(<any>error)
            }
        )
    }
}