import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VehiclesRoutingModule } from './vehicles-routing.module';
import { MaterialModule } from '../material/material.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FormsModule } from '@angular/forms';
import { VehicleRegistrationComponent } from './pages/new-vehicle/vehicle-registration.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';


@NgModule({
  declarations: [
    LayoutPageComponent,
    VehicleRegistrationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VehiclesRoutingModule,
    MaterialModule,
    FormsModule,
    MatTableModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class VehiclesModule { }
