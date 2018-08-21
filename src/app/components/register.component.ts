import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'Register',
    templateUrl: '../views/register.html',

})
export class RegisterComponent implements OnInit{
    public title: string;

    constructor(
        //private _route:ActivatedRoute,
        //private _router:Router
    ){
        this.title = 'Componmente del register';
    }
    ngOnInit(): void {
        console.log('El componente register ha sido creado');
        
    }


}