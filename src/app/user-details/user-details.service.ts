import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDetails} from './userDetails.model';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserDetailsService {

    constructor(private httpClient: HttpClient) {
    }

    public getUserDetails(userId: number): Observable<UserDetails> {
        return this.httpClient.get<UserDetails>(`${environment.apiBaseUrl}/user/${userId}`);
    }
}
