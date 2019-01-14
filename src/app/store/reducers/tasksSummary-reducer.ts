import { Action } from "@ngrx/store";

export interface State {
    count: {
        total: number,
        completed: number,
        due: number,
        upcoming: number
    }
}
  
 const INITIAL_TASKSSUMMARY_STATE: State = {
     count : {
         total: 94,
         completed: 33,
         due: 11,
         upcoming: 50
     }
 }
  
 export function tasksSummaryReducer(state = INITIAL_TASKSSUMMARY_STATE, action: Action) {

     return state;
 }