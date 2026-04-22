import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Appointment {
  id: number;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  status: string;
  type: string;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  public appointmentsSource = new BehaviorSubject<Appointment[]>([
    {
      id: 1,
      patientName: 'Ava Richardson',
      doctorName: 'Dr. Sarah Williams',
      date: '2026-04-11',
      time: '09:30',
      status: 'Upcoming',
      type: 'Consultation',
      message: 'First visit for general checkup'
    },
  ]);
  appointments$ = this.appointmentsSource.asObservable();

  addAppointment(appointment: Appointment) {
    const currentAppointments = this.appointmentsSource.value;
    const updatedAppointments = [...currentAppointments, appointment]
    this.appointmentsSource.next(updatedAppointments);
  }
}