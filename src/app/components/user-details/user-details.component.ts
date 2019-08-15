import {Component, OnInit} from '@angular/core';
import {UserDetailsService} from './user-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

    public userDetails;
    public userId: number;

    constructor(private userDetailsService: UserDetailsService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getUserDetails();
        this.userId = this.route.snapshot.params['id'];
        console.log(this.userId);
    }

    public getUserDetails() {
        this.userDetailsService.getUserDetails(1)
            .subscribe(userDetails => {
                this.userDetails = userDetails;
                console.log(this.userDetails);
            })
    }
}
