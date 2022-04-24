import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { AngularFireModule } from '@angular/fire/compat';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { HttpClientModule } from '@angular/common/http';
import { DetallesComponent } from './detalles/detalles.component';
import { HomeComponent } from './home/home.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { ImagesComponentComponent } from './components/images-component/images-component.component';


import { ImageCardComponent } from './components/image-card/image-card.component';
import { SecondaryNavComponent } from './components/secondary-nav/secondary-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FavoritosComponent,
    DetallesComponent,
    HomeComponent,
    ListCardComponent,
    ImagesComponentComponent,
    ImageCardComponent,
    SecondaryNavComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // AngularFireModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
