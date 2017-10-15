import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { SuccessComponent } from './success/success.component';
import { OperatorComponent } from './operator/operator.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { PendingTasksComponent } from './pending-tasks/pending-tasks.component';

const appRoutes: Routes = [
    { path: '', component:  HomeComponent },
    { path: 'register', component:  RegisterComponent },
    { path: 'about', component:  AboutComponent },
    { path: 'success', component:  SuccessComponent },
    { path: 'sign-in', component:  SignInComponent },
    { path: 'operator', component: OperatorComponent },
    { path: 'clients', component: ClientManagementComponent },
    { path: 'tasks', component: PendingTasksComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}