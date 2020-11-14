import {Tutorial} from './../models/tutorial.model'
import * as TutorialActions from '../actions/tutorial.actions'

const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

export function reducer (state: Tutorial[] = [initialState], action: TutorialActions.Actions){
    switch(action.type){
        case TutorialActions.TutorialTypes.ADD_TUTORIAL:
            return [...state, action.payload];

        case TutorialActions.TutorialTypes.REMOVE_TUTORIAL:
            state.splice(action.payload, 1)
            return state;

        case TutorialActions.TutorialTypes.GET_TUTORIAL:
            return [...state];
        
        case TutorialActions.TutorialTypes.GET_TUTORIAL_SUCCESS:
            return [...state, action.payload];
        
        case TutorialActions.TutorialTypes.GET_TUTORIAL_FAILURE:
            return [...state, action.payload];
            
        default:
            return state;
    }
}
