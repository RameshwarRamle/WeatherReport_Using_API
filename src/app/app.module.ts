import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomDirectivesComponent } from './custom-directives/custom-directives.component';
import { WeatherComponent } from './shared/components/weather/weather.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { CricketersComponent } from './shared/components/cricketers/cricketers.component';
import { CsshighlightDirective } from './shared/directives/csshighlight.directive';
import { AllPipesPipe } from './shared/pipes/all-pipes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CustomDirectivesComponent,
    WeatherComponent,
    FilterPipe,
    CricketersComponent,
    CsshighlightDirective,
    AllPipesPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
