import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { OperatorComponent } from './operator/operator.component';
import { PendingTasksComponent } from './pending-tasks/pending-tasks.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ServiceManagementComponent } from './service-management/service-management.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { ClientsService } from './clients.service';
import { TasksService } from './tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    OperatorComponent,
    PendingTasksComponent,
    ClientManagementComponent,
    ServiceManagementComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ClientsService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
