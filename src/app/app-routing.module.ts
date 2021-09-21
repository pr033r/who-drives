import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/components/about/about.component';

import { CurrentRidesComponent } from './main/components/current-rides/current-rides.component';
import { FriendsListComponent } from './main/components/friends-list/friends-list.component';
import { LoginComponent } from './main/components/login/login.component';
import { MyRidesComponent } from './main/components/my-rides/my-rides.component';
import { SettingsComponent } from './main/components/settings/settings.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'current-rides', pathMatch: 'full' },
  { path: 'current-rides', component: CurrentRidesComponent },
  { path: 'my-rides', component: MyRidesComponent },
  { path: 'friends-list', component: FriendsListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
