import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from 'src/app/app-material.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppRoutingModule, AppMaterialModule],
  exports: [CommonModule, AppRoutingModule, AppMaterialModule],
})
export class SharedModule {}
