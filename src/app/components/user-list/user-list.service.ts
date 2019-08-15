import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../interfaces/user';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserListService {

    constructor(private httpClient: HttpClient) {
    }

    public getUsers(): Observable<Array<User>> {
        return this.httpClient.get<Array<User>>('https://dummyapi.io/api/user');
    }
}
