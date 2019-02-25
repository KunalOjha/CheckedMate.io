import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Task, TaskCategory } from 'models.ts/task';
import { Http} from '@angular/http';
import { v4 as uuid } from 'uuid';
import { Observable } from '@firebase/util';


@Injectable()
export class TasksService {

    constructor(private http: Http, private db: AngularFireDatabase) {}

    fetchTasklist(type: TaskCategory) {
        return this.db.list(`users/${window.sessionStorage.getItem('uid')}/${type}`).valueChanges()
    }

    addTask(item: Task) {
        const userId: string = sessionStorage.getItem('uid');
        const taskId: string = uuid(); //creating unique id for task
        return this.http.put(`https://checkthis-io.firebaseio.com/users/${userId}/to-do/${taskId}.json`, item);
    }
}