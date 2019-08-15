import {Component, OnInit} from '@angular/core';
import {UserListService} from './user-list.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    public userList = [];

    constructor(private userListService: UserListService) {
    }

    ngOnInit() {
        this.getUsers();
    }

    public getUsers() {
        this.userListService.getUsers()
            .subscribe(users => {
                this.userList = users;
                console.log(this.userList);
            });
    }


}
