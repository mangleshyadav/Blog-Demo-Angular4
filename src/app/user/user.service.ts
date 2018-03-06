import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpService } from "../shared/services/http.service";
import { RequestOptions } from "@angular/http";


@Injectable()
export class UserService {

    private url = 'https://jsonplaceholder.typicode.com/users'
    constructor(private svc: HttpService) {
    }

    getUser(id): Observable<any> {
        return this.svc.Get('https://jsonplaceholder.typicode.com/users/' + id);
    }

    getAllUsers(): Observable<any> {
        return this.svc.Get('https://jsonplaceholder.typicode.com/users');
    }

    getUserSpecificPosts(userId): Observable<any> {
        let params = {
            params: new HttpParams().set('userId', userId),
        }
        let options = { params: params }
        let url = "https://jsonplaceholder.typicode.com/posts";
        return this.svc.Get(url, options);
    }
}

/*
   getUserSpecificPosts(id): Observable<any> {
        let params = {
            params: new HttpParams().set('id', id),
        }
        // console.log(params);
        // let options = { params: params }
        let url = "https://jsonplaceholder.typicode.com/posts";
        return this.svc.Get(url, {
            params: { userId: id }
        });
    }
*/
