import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDetailsModel} from '../../interfaces/userDetails.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserDetailsService {

    constructor(private httpClient: HttpClient) {
    }

    public getUserDetails(userId: number): Observable<UserDetailsModel> {
        return this.httpClient.get<UserDetailsModel>(`${environment.apiBaseUrl}` + '/user/' + userId);
    }
}
