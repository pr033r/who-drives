import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
  ],
  exports: [
    BrowserAnimationsModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
  ],
  providers: [],
})
export class AppMaterialModule {}
