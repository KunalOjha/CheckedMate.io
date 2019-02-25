import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { v4 as uuid } from 'uuid';
import { Task } from 'models.ts/task';

@Injectable()
export class TasksService {

    constructor(private http: Http) {}

    storeTask(item: Task) {
        const userId: string = sessionStorage.getTask('uid')
        const taskId: string = uuid();
        return this.http.put(`https://checkthis-io.firebaseio.com/users/${userId}/to-do/${taskId}.json`, item);
    }
}