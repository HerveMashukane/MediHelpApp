import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// patients interface
export interface Patient {
  preferedName: string;
  fullName: string;
  image: string; 
  alt: string;
  department: string;
  age: number;
  bloodGroup: string;
}

@Injectable({
  providedIn: 'root'
})
export class PatientRecordsService {

  private patientsSource = new BehaviorSubject<Patient[]>([]);
  patients$ = this.patientsSource.asObservable();
}
