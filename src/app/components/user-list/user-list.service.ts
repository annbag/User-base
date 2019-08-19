import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../interfaces/user.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserListService {

    constructor(private httpClient: HttpClient) {

    }

    public getUsers(): Observable<Array<UserModel>> {
        return this.httpClient.get<Array<UserModel>>(`${environment.apiBaseUrl}` + '/user');
    }
}
