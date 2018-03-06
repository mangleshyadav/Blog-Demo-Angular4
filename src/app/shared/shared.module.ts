import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpService } from "./services/http.service";

import { NavbarComponent } from "./navbar/navbar.component";
import { PaginationComponent } from "./pagination/pagination.component";

@NgModule({
    declarations: [NavbarComponent, PaginationComponent],
    imports: [CommonModule],
    exports: [NavbarComponent, PaginationComponent],
    providers: [HttpService]
})
export class SharedModule { }