import { Component, OnInit } from '@angular/core';;
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../interfaces/vehicle.interface';

@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styles: [
  ]
})
export class ListVehicleComponent implements OnInit {

  public vehicles: Vehicle[] = [];
  displayedColumns: string[] = ['edit', 'id', 'make', 'model', 'year', 'color', 'licensePlate', 'price', 'delete'];

  constructor( private vehicleService: VehicleService ) {}

  ngOnInit(): void {
    this.vehicleService.listVehicles()
      .subscribe( vehicle => this.vehicles = vehicle );
  }

}
