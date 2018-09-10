import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { ChargingService } from './services/charging.service';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/core/spinner/spinner.component';
import { MapComponent } from './components/map/map.component';
import { HeaderComponent } from './components/core/header/header.component';
import { ZoomComponent } from './components/map/zoom/zoom.component';
import { ConnectorFilterComponent } from './components/map/connector-filter/connector-filter.component';
import { GeoLocationFormComponent } from './components/map/geo-location-form/geo-location-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    MapComponent,
    HeaderComponent,
    ZoomComponent,
    ConnectorFilterComponent,
    GeoLocationFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: <INSERT-GOOGLE-MAP-API-KEY>
    }),
    AgmJsMarkerClustererModule,
    AgmSnazzyInfoWindowModule
  ],
  providers: [ChargingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
