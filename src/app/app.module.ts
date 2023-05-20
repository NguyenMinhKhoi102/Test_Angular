import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloComponent } from './hello.component';
import { AuthorComponent } from './nGForExample.component';
import { BindingComponent } from './bindingExample.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { ToggleComponent } from './toggle/toggle.component';
import { TabGroupComponent } from './tab-group/tab-group.component';
import { TabPanelComponent } from './tab-panel/tab-panel.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, AuthorComponent, BindingComponent, ProgressBarComponent, AuthorListComponent, ToggleComponent, TabGroupComponent, TabPanelComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
