import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ArkeraLibModule } from 'arkera-component-lib/dist/arkera.lib.module.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ArkeraLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
