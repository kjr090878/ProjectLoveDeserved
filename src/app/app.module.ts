import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { OperatorComponent } from './operator/operator.component';
import { OperatorNavComponent } from './operator-nav/operator-nav.component';
import { OperatorNavItemComponent } from './operator-nav-item/operator-nav-item.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    OperatorComponent,
    OperatorNavComponent,
    OperatorNavItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
