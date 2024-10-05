import { Component } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle.interface';
import { VehicleService } from '../../services/vehicle.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent {

    constructor( private vehicleService: VehicleService ) {}

    initForm = {
        id: 0,
        make: '',
        model: '',
        year: new Date().getFullYear(),
        color: '',        
        licensePlate: ''
    };

    vehicle: Vehicle = { ...this.initForm }

  registerVehicle() {
    this.vehicleService.createVehicle(this.vehicle).subscribe(response => {
        if (response) {
          console.log('Vehículo creado:', response);
          Swal.fire({
            title: 'Vehículo creado',
            icon: 'info', // 'success', 'error', 'warning', 'info', 'question'
            confirmButtonText: 'Aceptar',
            width: '250px'
          }).then((result) => {
            if (result.isConfirmed) {
              this.resetForm();
            }
          });
        } else {
          console.error('Error al crear el vehículo.');
          Swal.fire({
            title: 'Error al crear el vehículo',
            icon: 'warning', // 'success', 'error', 'warning', 'info', 'question'
            confirmButtonText: 'Aceptar',
            width: '300px'
          });
        }
      });

  }

  setProperty<K extends keyof Vehicle>(property: K, value: string) {
    if (typeof this.vehicle[property] === 'string') {
      this.vehicle[property] = value.trim().toUpperCase() as any;
    }
  }


  resetForm() {
    this.vehicle = { ...this.initForm }
  }

}
