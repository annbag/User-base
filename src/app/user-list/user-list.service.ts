import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserListService {

    constructor(private httpClient: HttpClient) {

    }

    public getUsers(): Observable<Array<User>> {
        return this.httpClient.get<Array<User>>(`${environment.apiBaseUrl}` + '/user');
    }
}
