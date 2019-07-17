
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AwardsComponent } from './components/awards/awards.component';
import { VideosComponent } from './components/videos/videos.component';


const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "contact", component: ContactComponent },
    { path: "portafolio", component: PortafolioComponent },
    { path: "toolbar", component: ToolbarComponent },
    { path: "productos", component: ProductosComponent },
    { path: "awards", component: AwardsComponent },
    { path: "videos", component: VideosComponent },
    { path: "", pathMatch: "full", redirectTo: "home" }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true});

