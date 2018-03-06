import { Component, OnInit } from '@angular/core';
import { PostService } from "./post.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToasterService } from 'angular5-toaster';

@Component({
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

    userId: any;
    posts: any;
    loading = true;
    total = 100;
    page = 1;
    totalPages = 10;

    constructor(private svc: PostService, private router: Router, private route: ActivatedRoute, private toasterService: ToasterService) { }

    ngOnInit() {
        this.getUserPosts();
    }

    // API Calls

    getUserPosts() {
        let vm = this;
        this.svc.getPosts().subscribe((result) => {
            this.posts = result.filter(function (post) {
                return post.userId == vm.page;
            });

            this.toasterService.pop({
                type: 'success',
                title: 'Success',
                body: ' User Post Loaded Successfully',
                timeout: 5000,
                showCloseButton: true
            });
            this.loading = false;
        });
    }

    deletePost(id, i) {
        let vm = this;
        this.svc.deletePost(id).subscribe((result) => {
            this.posts.splice(i, 1);
            console.log(result);
            this.loading = false;

            this.toasterService.pop({
                type: 'error',
                title: 'success',
                body: `User Post with ${id} is Deleted Successfully`,
                timeout: 5000,
                showCloseButton: true
            });
        });
    }

    goToPost(id) {
        this.router.navigate(['/post/' + id]);
    }
    goToPage(n: number): void {
        let vm = this;
        this.page = n;
        this.svc.getPosts().subscribe((result) => {
            this.posts = result.filter(function (post) {
                return post.userId == vm.page;
            });
            this.loading = false;
        });
    }
    onPrev(): void {
        this.page--;
        let vm = this;
        this.svc.getPosts().subscribe((result) => {
            this.posts = result.filter(function (post) {
                return post.userId == vm.page;
            });
            this.loading = false;
        });
    }
    onNext(): void {

        this.page++;
        let vm = this;
        this.svc.getPosts().subscribe((result) => {
            this.posts = result.filter(function (post) {
                return post.userId == vm.page;
            });
            this.loading = false;
        });
        //  this.getMessages();
    }

    trackById(index, post) {
        return post.id;
    }


}