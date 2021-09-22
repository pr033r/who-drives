import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from 'src/app/shared/components/page-not-found/page-not-found.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import { AboutComponent } from '../../components/about/about.component';
import { CurrentRidesComponent } from '../../components/current-rides/current-rides.component';
import { FriendsListComponent } from '../../components/friends-list/friends-list.component';
import { LoginComponent } from '../../components/login/login.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { MyRidesComponent } from '../../components/my-rides/my-rides.component';
import { SettingsComponent } from '../../components/settings/settings.component';


@NgModule({
  declarations: [
    CurrentRidesComponent,
    PageNotFoundComponent,
    MenuComponent,
    LoginComponent,
    SettingsComponent,
    AboutComponent,
    MyRidesComponent,
    FriendsListComponent,
  ],
  imports: [SharedModule],
  exports: [MenuComponent],
})
export class MainModule {}
