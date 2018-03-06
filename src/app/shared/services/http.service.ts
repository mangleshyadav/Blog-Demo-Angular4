import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpParams } from "@angular/common/http";
import { BaseRequestOptions } from "@angular/http";
import { ToasterService, Toast } from 'angular5-toaster';
@Injectable()
export class HttpService {
    constructor(private http: HttpClient, private toasterService: ToasterService) { }

    Get(url: string, options?: any): Observable<Response> {
        return this.request('get', url, options);
    }
    

    Delete(url: string, options?: any): Observable<Response> {
        return this.request('delete', url);
    }

    private request(method: string, url: string, options?: any): Observable<Response> {
        return this.http.request(method, url, options).catch((error: any) => this.onErrorHandler(error));
    }

    private onErrorHandler(error: any) {
        debugger;
        let toaster: Toast;
        toaster = { type: 'error', body: error.message };
        this.toasterService.pop(toaster);
        const errors = error.json();
        if (error.status == 406 && Array.isArray(errors) && errors.indexOf("User is not logged in.") !== -1) {
        } else if (error.status == 401 && Array.isArray(errors) && errors.indexOf("CSRF validation failed") !== -1) {
            // TODO: should logout after getting token
        }
        return Observable.throw(errors);
    }
}