
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }
    gotoAll() {
        this.router.navigate(['/posts']);
    }
    gotoAllUsers() {
        this.router.navigate(['/all-users']);
    }
    gotoForm(){
        this.router.navigate(['/form']);
    }
}