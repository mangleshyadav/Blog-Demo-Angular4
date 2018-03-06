import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from "./post/post.component";
import { ErrorComponent } from "./error/error.component";
import { PostDetailComponent } from "./post/post-detail.component";
import { UsersPostsComponent } from "./user/user-posts.component";
import { UsersComponent } from "./user/users.component";
import { HeroFormComponent } from "./question/hero-form.component";
import { HeroForm1Component } from "./question/hero-form.component1";


const appRoutes: Routes = [
    { path: 'posts', component: PostComponent },
    { path: 'post/:id', component: PostDetailComponent },

    { path: 'post-list', component: UsersPostsComponent },
    { path: 'all-users', component: UsersComponent },
    { path: 'form', component: HeroFormComponent },
    { path: 'form1', component: HeroForm1Component },

    { path: '', redirectTo: '/posts', pathMatch: 'full' },
    { path: '**', component: ErrorComponent }
];

@NgModule({

    imports: [
        RouterModule.forRoot(appRoutes)
    ],

    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule { }