import { Component, OnInit } from '@angular/core';;
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../interfaces/vehicle.interface';
import Swal from 'sweetalert2';

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
    this.vehicleService.listVehicles().subscribe( vehicle => this.vehicles = vehicle );
  }


  deleteVehicle (id: number) {
    this.vehicleService.deleteVehicle(id).subscribe({
      next: () => {
        console.log('Vehículo eliminado con éxito');
        Swal.fire({
          title: 'Vehículo eliminado',
          icon: 'info', // 'success', 'error', 'warning', 'info', 'question'
          confirmButtonText: 'Aceptar',
          width: '250px'
        }).then((result) => {
          if (result.isConfirmed) {
            this.vehicleService.listVehicles().subscribe( vehicle => this.vehicles = vehicle );
          }
        });
      },
      error: (err) => {
        console.error('Error al eliminar el vehículo:', err);
        Swal.fire({
          title: 'Error al eliminar el vehículo',
          icon: 'warning', // 'success', 'error', 'warning', 'info', 'question'
          confirmButtonText: 'Aceptar',
          width: '300px'
        });
      }
    });
  }

}
