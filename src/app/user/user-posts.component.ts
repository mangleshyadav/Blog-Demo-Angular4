import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "./user.service";


@Component({
    templateUrl: './user-posts.component.html',
    styleUrls: ['./user-posts.component.scss']
})
export class UsersPostsComponent implements OnInit {

    userId: any;

    posts: any;
    loading= true;
    userDetail: any;
    userComments: any;
    constructor(private svc: UserService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log(params.userId);
            this.userId = params;
             this.getUserPosts(params.userId);
            this.getUser(params.userId);
        });
    }
    getUserPosts(userId) {
        this.svc.getUserSpecificPosts(userId).subscribe((result) => {
            this.posts = result;
            console.log(this.posts);
            this.loading = false;
        });
    }
    getUser(userId) {
        this.svc.getUser(userId).subscribe((result) => {
            this.userDetail = result;
            this.loading = false;
        });
    }
    goToComments(userId) {
        this.router.navigate(['/post/' + userId]);
    }
}
