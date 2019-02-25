import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { REQUEST_USER_TASKS, RequestUserTasksSuccess } from '../actions/tasks.actions';
import { map, switchMap} from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Task } from 'models.ts/task';


@Injectable()
export class TasksEffects {

@Effect()
updateTaskList$ = this.actions$.pipe(
    ofType(REQUEST_USER_TASKS),
    switchMap(() => {
       return this.db.list(`users/${window.sessionStorage.getItem('uid')}/to-do`).valueChanges()
    }),
    map((tasks: Task[]) => new RequestUserTasksSuccess(tasks))
)

constructor(private actions$: Actions, private db: AngularFireDatabase) {}
  
}
