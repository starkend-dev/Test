// import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';

// import { NameComponent } from "./name.component";

const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "contact", component: ContactComponent },
    { path: "portafolio", component: PortafolioComponent },
    { path: "", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true});

// @NgModule
//     (
//     {
//         exports: [RouterModule],
//         imports: [RouterModule.forChild(routes)],
//     }
//     )
// export class NameRoutingModule
// {
    
// }