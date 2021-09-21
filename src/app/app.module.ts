import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentRidesComponent } from './main/components/current-rides/current-rides.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { MenuComponent } from './main/components/menu/menu.component';
import { LoginComponent } from './main/components/login/login.component';
import { SettingsComponent } from './main/components/settings/settings.component';
import { AboutComponent } from './main/components/about/about.component';
import { MyRidesComponent } from './main/components/my-rides/my-rides.component';
import { FriendsListComponent } from './main/components/friends-list/friends-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentRidesComponent,
    PageNotFoundComponent,
    MenuComponent,
    LoginComponent,
    SettingsComponent,
    AboutComponent,
    MyRidesComponent,
    FriendsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
