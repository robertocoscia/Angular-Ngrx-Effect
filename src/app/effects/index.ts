import {Actions, Effect, ofType} from '@ngrx/effects'
import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core'
import * as TutorialActions from '../actions/tutorial.actions'
import { GetTutorialServices } from '../services/getTutorial.service';
import {map,catchError, switchMap} from 'rxjs/internal/operators';
import {of} from 'rxjs'

@Injectable()
export class TutorialEffect {
    constructor(
        private actions$ : Actions,
        private getTutorialServices: GetTutorialServices
        ){}

    @Effect({dispatch:true})
    GetPurchase$ = this.actions$.pipe(
        ofType(TutorialActions.TutorialTypes.GET_TUTORIAL),
        switchMap(()=> {
            return this.getTutorialServices.getTutorial().pipe(
                map(
                    (payload: Array<any>) =>of(new TutorialActions.GetTutorialSuccess(payload)),
                catchError((e:HttpErrorResponse)=>of(new TutorialActions.GetTutorialFailure(e)))
                )
            )
        })   
                
        
    )}