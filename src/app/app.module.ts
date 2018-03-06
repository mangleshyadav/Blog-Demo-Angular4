// Third party modules

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular5-toaster';
import { ReactiveFormsModule } from '@angular/forms';
// Custom modules

import { AppRoutingModule } from './app.routing.module';
import { PostModule } from "./post/post.module";
import { ErrorModule } from "./error/error.module";
import { SharedModule, } from "./shared/shared.module";
import { UserModule } from "./user/user.module";

// Custom components
import { AppComponent } from './app.component';
import { QuestionModule } from "./question/question.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ToasterModule,
    HttpClientModule,
    ReactiveFormsModule,
    PostModule,
    UserModule,
    ErrorModule,
    QuestionModule,

    SharedModule,
    AppRoutingModule,

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [],

  bootstrap: [AppComponent]
})
export class AppModule { }