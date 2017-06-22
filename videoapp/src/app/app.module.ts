import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { CommentComponentComponent } from './comment-component/comment-component.component';
import { DescriptionComponentComponent } from './description-component/description-component.component';
import { ViewsComponentComponent } from './views-component/views-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    MainComponentComponent,
    CommentComponentComponent,
    DescriptionComponentComponent,
    ViewsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
