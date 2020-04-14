import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayOneComponent } from './components/display-one/display-one.component';
import { DisplayTwoComponent } from './components/display-two/display-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayOneComponent,
    DisplayTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
