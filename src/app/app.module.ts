import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { LandingComponent } from "./pages/landing/landing.component";

import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { OurServicesComponent } from "./pages/our-services/our-services.component";
import { ContactUsComponent } from "./pages/contact-us/contact-us.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    AboutUsComponent,
    OurServicesComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    RouterModule,
    BrowserModule /* or CommonModule */,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
