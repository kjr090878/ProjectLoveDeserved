import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OperatorComponent } from './operator/operator.component';



const appRoutes: Routes = [
    { path: '', component:  HomeComponent },
    { path: 'operator', component: OperatorComponent }

    

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    // RouterModule.forRoot(appRoutes, {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{}