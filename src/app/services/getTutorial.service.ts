import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs'
import {HttpClient,HttpErrorResponse} from '@angular/common/http'

@Injectable()
export class GetTutorialServices{
    constructor(private http: HttpClient){}

    getTutorial(){
        return of([
            {
                id: 0,
                name: 'Teddy bears',
                color: 'pink',
                value:200
            },
            {
                id: 1,
                name: 'Teddy bears two',
                color: 'yellow',
                value:300
            }
        ])
    }

    
}