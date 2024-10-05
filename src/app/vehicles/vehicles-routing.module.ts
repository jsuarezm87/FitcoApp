import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { VehicleRegistrationComponent } from './pages/new-vehicle/vehicle-registration.component';
import { ListVehicleComponent } from './pages/list-vehicle/list-vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-vehicle', component: VehicleRegistrationComponent },
      { path: 'new-vehicle/:id', component: VehicleRegistrationComponent },
      { path: 'list-vehicle', component: ListVehicleComponent },
      { path: '**', redirectTo: 'new-vehicle' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclesRoutingModule { }
