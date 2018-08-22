import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserServices } from '../services/user.services';



@Component({
    selector: 'login',
    templateUrl: '../views/login.html',
    providers: [UserServices]

})
export class LoginComponent implements OnInit {
    public title: string;
    public user;
    public identity;
    public token;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserServices
    ) {
        this.title = 'Identificate';
        this.user = {
            "email": "",
            "password": "",
            "getHash": true
        };
    }
    ngOnInit(): void {
        console.log('El componente ha sido creado');
        /*console.log(this._userService.getIdentity());
        console.log(this._userService.getToken());*/
        this.logOut();
        this._userService.redirectIfIdentity(this._router);
    }

    logOut(){
        this._route.params.forEach((params:Params)=>{
            let logout = +params['id'];
            if(logout==1){
                localStorage.removeItem('identity');
                localStorage.removeItem('token');

                this.identity = null;
                this.token =null;
                window.location.href = '/login';
            }
        });
    }

    onSubmit() {
        console.log(this.user);
        this._userService.signup(this.user).subscribe(
            response => {
                this.identity = response;
                if (this.identity.length <= 1) {
                    console.log(this.identity.length);
                    console.log('Error en el servidor');
                } else{
                    if (!this.identity.status) {
                        localStorage.setItem('identity', JSON.stringify(this.identity));
                        //getToken
                        this.user.getHash =false;
                        this._userService.signup(this.user).subscribe(
                            response => {
                                this.token = response;
                                if (this.identity.length <= 1) {
                                    console.log(this.identity.length);
                                    console.log('Error en el servidor');
                                } else{
                                    if (!this.identity.status) {
                                        localStorage.setItem('token', JSON.stringify(this.token));
                                        window.location.href='/';
                                    }
                                }
                            },
                            error => {
                                console.log(<any>error);
                
                            }
                        );
                    }
                }
            },
            error => {
                console.log(<any>error);

            }
        );
    }

   
}