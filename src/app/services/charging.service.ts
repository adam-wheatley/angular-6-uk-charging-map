import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, filter} from 'rxjs/operators';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { ChargingData, ChargeDeviceItem } from './../models/charger';

@Injectable({
  providedIn: 'root'
})
export class ChargingService {

  readonly url = '/data';
  constructor(private http: HttpClient) {}

  getChargingData() {

    return this.http
      .get<ChargingData>(this.url)
      .pipe(
        map(data => data.ChargeDevice),
        catchError(this.handleError)
      );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }

}
