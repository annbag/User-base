import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserDetails} from '../../interfaces/userDetails';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserDetailsService {

    constructor(private httpClient: HttpClient) {
    }

    public getUserDetails(userId: number): Observable<UserDetails> {
        return this.httpClient.get<UserDetails>('https://dummyapi.io/api/user/' + userId);
    }
}
