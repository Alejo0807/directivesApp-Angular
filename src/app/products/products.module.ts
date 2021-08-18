import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import { AddComponent } from './pages/add/add.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }
