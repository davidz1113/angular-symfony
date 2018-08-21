import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'login',
    templateUrl: '../views/login.html',

})
export class LoginComponent implements OnInit{
    public title: string;

    constructor(
        //private _route:ActivatedRoute,
        //private _router:Router
    ){
        this.title = 'Componmente del login';
    }
    ngOnInit(): void {
        console.log('El componente ha sido creado');
        
    }


}