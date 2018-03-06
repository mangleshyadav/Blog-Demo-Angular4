import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UsersPostsComponent } from "./user-posts.component";
import { UsersComponent } from "./users.component";
import { SharedModule } from "../shared/shared.module";
import { UserService } from "./user.service";

@NgModule({
    declarations: [UsersPostsComponent, UsersComponent],
    imports: [CommonModule, SharedModule],
    exports: [UsersPostsComponent, UsersComponent],
    providers: [UserService],
})
export class UserModule { }
