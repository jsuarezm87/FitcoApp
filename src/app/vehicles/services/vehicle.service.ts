import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Vehicle } from '../interfaces/vehicle.interface';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class VehicleService {

  private baseUrl: string = environments.baseUrl;


  constructor(private http: HttpClient) { }


  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${this.baseUrl}/vehiculos`, vehicle)
        .pipe(
            catchError(error => {
                console.error('Error al crear vehículo:', error);
                throw error;
            })
        );
  }


  listVehicles():Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${ this.baseUrl }/listVehicles`);
  }

  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteVehicles/${id}`)
        .pipe(
            catchError(error => {
                console.error('Error al eliminar vehículo:', error);
                throw error;
            })
        );
  }

  getVehicles(id: number):Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${ this.baseUrl }/getVehicle/${id}`);
  }


}
