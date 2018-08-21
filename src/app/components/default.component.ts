import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'default',
    templateUrl: '../views/default.html',

})
export class DefaultComponent implements OnInit{
    public title: string;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router
    ){
        this.title = 'Componmente del Home Page';
    }
    ngOnInit(): void {
        console.log('El componente register ha sido creado');
        
    }


}