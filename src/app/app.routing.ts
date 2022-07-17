import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


const routes: Routes =[
    { 
        path: '', 
        redirectTo: 
        'landing', 
        pathMatch: 'full' },
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'our-services',
        component: OurServicesComponent
    },
    {
        path: 'contact-us',
        component: ContactUsComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes,{
          useHash: false
        })
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
