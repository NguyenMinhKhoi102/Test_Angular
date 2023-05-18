import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { AuthorComponent } from './nGForExample.component';
import { BindingComponent } from './bindingExample.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, AuthorComponent, BindingComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
