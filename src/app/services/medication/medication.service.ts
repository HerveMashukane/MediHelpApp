import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



// medication form schema
export interface Medication {
  id: number;
  medName: string;
  doctorName: string;
  dosage: string;
  dosageUnit: string;
  schedule: string;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Inactive' | 'Pending' | 'Completed';
  progress: number;
  notes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  // medications observable list
  public medicationsSource = new BehaviorSubject<Medication[]>([
    {
      id: 1,
      medName: 'Amoxicillin',
      doctorName: 'Dr. Carter',
      dosage: '500',
      dosageUnit: 'mg',
      schedule: 'Twice daily',
      startDate: '2026-04-01',
      endDate: '2026-04-10',
      status: 'Active',
      progress: 40,
      notes: 'Take after meals'
    },
    {
      id: 2,
      medName: 'Ibuprofen',
      doctorName: 'Dr. Smith',
      dosage: '200',
      dosageUnit: 'mg',
      schedule: 'Every 8h',
      startDate: '2026-03-25',
      endDate: '2026-04-05',
      status: 'Completed',
      progress: 100
    },
    {
      id: 3,
      medName: 'Metformin',
      doctorName: 'Dr. Lee',
      dosage: '850',
      dosageUnit: 'mg',
      schedule: 'Daily',
      startDate: '2026-04-03',
      endDate: '2026-05-03',
      status: 'Pending',
      progress: 10
    }
  ]);
  medications$ = this.medicationsSource.asObservable();

  constructor() { }

  addMedication(medication: Medication){
    const currentMedications = this.medicationsSource.value;
    const updatedMedications = [...currentMedications, medication];
    this.medicationsSource.next(updatedMedications);
  }
}
