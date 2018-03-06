import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpService } from "../shared/services/http.service";


@Injectable()
export class PostService {

    constructor(private http: HttpService) { }

    private basePath = "https://jsonplaceholder.typicode.com/posts";

    getPosts(): Observable<any> {
        let url = this.basePath;
        return this.http.Get(url);
    }
    deletePost(id): Observable<any> {
        let url = this.basePath + '/' + id;
        return this.http.Delete(url);
    }
    getPost(id): Observable<any> {
        let url = this.basePath + '/' + id;
        return this.http.Get(url);
    }
     getUser(id): Observable<any> {
        let url = "https://jsonplaceholder.typicode.com/users/" + id;
        return this.http.Get(url);
    }
    getComments(id): Observable<any> {
        let url = this.basePath + '/' + id + '/comments';
        return this.http.Get(url);
    }
}