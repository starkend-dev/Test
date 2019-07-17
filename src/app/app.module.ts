import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './core/app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AwardsComponent } from './components/awards/awards.component';
import { VideosComponent } from './components/videos/videos.component';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
// import {MatButtonModule} from '@angular/material/button';

// Rutas
import { APP_ROUTES } from './app.routes';

// ng-bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    PortafolioComponent,
    ToolbarComponent,
    ProductosComponent,
    AwardsComponent,
    VideosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
