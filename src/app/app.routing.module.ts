import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';


const routes:Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'ABOUT',
        component: AboutPagesComponent
    },
    {
        path: 'CONTACT',
        component: ContactPageComponent
    },
    {
        path: '**',
        redirectTo: ''
    },  
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
