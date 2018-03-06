import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from "@angular/router";
import { PostService } from "./post.service";

@Component({
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
    id = "";
    post: any;
    userId: any;
    userDetail: any;
    userComments: any;
    loading = true;

    constructor(private svc: PostService, private route: ActivatedRoute, private router: Router) {
        this.id = this.route.snapshot.paramMap.get('id');
    }

    ngOnInit() {
        this.getPost(this.id);
        this.getUserComments(this.id);
    }
    
    getPost(id) {
        this.svc.getPost(id).subscribe((result) => {
            this.post = result;
            this.getUser(result.userId);
            this.loading = false;
        });
    }
    getUser(userId) {
        this.svc.getUser(userId).subscribe((result) => {
            this.userDetail = result;
           // console.log(result);
            this.loading = false;
        });
        
    }
    getUserComments(id) {
        this.svc.getComments(id).subscribe((result) => {
            this.userComments = result;
            console.log(result);
             this.loading = false;
        });
    }
    goToUserBlogs(id) {
        let navigationExtras: NavigationExtras = {

            queryParams: { 'userId': id }
        };
        this.router.navigate(['/post-list'], navigationExtras);
    }
}