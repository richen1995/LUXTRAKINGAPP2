import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';


const routes:Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutPagesComponent
    },
/*      {
        path: '**',
        redirectTo: 'about'
    },  */
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes) //forRoot: Xq es el roter principal (BASE)
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule { }
