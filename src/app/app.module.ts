import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JustUseModule } from './just-use/just-use.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JustUseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
