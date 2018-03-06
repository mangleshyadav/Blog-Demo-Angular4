import { NgModule } from '@angular/core';
import { PostComponent } from "./post.component";
import { CommonModule } from "@angular/common";
import { PostService } from "./post.service";
import { PostDetailComponent } from "./post-detail.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [PostComponent, PostDetailComponent],
    imports: [CommonModule, SharedModule],
    exports: [PostComponent],
    providers: [PostService],
})
export class PostModule { }