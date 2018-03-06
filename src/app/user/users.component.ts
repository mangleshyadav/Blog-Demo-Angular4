import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from "@angular/router";
import { UserService } from "./user.service";

@Component({
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    userId: any;
    loading = true;
    users: any;

    data:any;
    constructor(private svc: UserService, private router: Router, private route: ActivatedRoute) { }


    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.svc.getAllUsers().subscribe((result) => {
            this.users = result;
            this.loading = false;
        });
    }
    onKey(event){
  this.data= event.target.value;
    }
    goToPost(id) {
        let navigationExtras: NavigationExtras = {
            queryParams: { 'userId': id }
        };
        this.router.navigate(['/post-list'], navigationExtras);

    }
}