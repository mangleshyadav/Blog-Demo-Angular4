import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from "./hero-form.component";
import { HeroForm1Component } from "./hero-form.component1";


@NgModule({
    declarations: [HeroFormComponent, HeroForm1Component],
    imports: [FormsModule, CommonModule],
    exports: [HeroFormComponent,HeroForm1Component],
    providers: [],
})
export class QuestionModule { }