import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Tutorial} from '../models/tutorial.model';

export enum TutorialTypes{
    ADD_TUTORIAL =           '[TUTORIAL] Add',
    REMOVE_TUTORIAL =  '[TUTORIAL] Remove',
    GET_TUTORIAL =  '[TUTORIAL] Get',
    GET_TUTORIAL_SUCCESS =  '[TUTORIAL] success',
    GET_TUTORIAL_FAILURE =  '[TUTORIAL] failure'
}


export class AddTutorial implements Action {
    readonly type= TutorialTypes.ADD_TUTORIAL

    constructor(public payload: Tutorial){}
}

export class RemoveTutorial implements Action {
    readonly type= TutorialTypes.REMOVE_TUTORIAL

    constructor(public payload: number){}
}

export class GetTutorial implements Action {
    readonly type= TutorialTypes.GET_TUTORIAL

    constructor(public payload: any){}
}


export class GetTutorialSuccess implements Action {
    readonly type= TutorialTypes.GET_TUTORIAL_SUCCESS

    constructor(public payload: any){}
}


export class GetTutorialFailure implements Action {
    readonly type= TutorialTypes.GET_TUTORIAL_FAILURE

    constructor(public payload: any){}
}


export type Actions = AddTutorial | RemoveTutorial | GetTutorial | GetTutorialSuccess | GetTutorialFailure