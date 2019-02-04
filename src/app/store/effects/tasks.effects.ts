import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { REQUEST_USER_TASKS, RequestUserTasksSuccess } from '../actions/tasks.actions';
import { map, take, tap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable()
export class TasksEffects {

@Effect()
updateTaskList$ = this.actions$.pipe(
    ofType(REQUEST_USER_TASKS),
    map(() => {
        const items = this.db.collection(`users/${window.sessionStorage.getItem('uid')}/to-do`).valueChanges().pipe(
            take(1),
            );
        return new RequestUserTasksSuccess(items)
    })


)

constructor(private actions$: Actions, private db: AngularFirestore) {}
  
}
