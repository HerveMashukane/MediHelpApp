import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Appointment, AppointmentService } from '../../services/appointments/appointment.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  appointmentStats$: Observable<{
    Active: number;
    Upcoming: number;
    Completed: number;
    Pending: number;
    Canceled: number;
    Total: number;
  }>;

  constructor(private appointmentService: AppointmentService) {
    this.appointmentStats$ = this.appointmentService.appointmentStats$
  }
  today = new Date();
  patientActivities: any = [
    {patientName: 'Herve Mashukane', doctorName: 'Christelle Pelaya', date: 'September 2, 2025', status: 'Completed'},
    {patientName: 'Hiro Mataba', doctorName: 'Herve Mashukane', date: 'August 10, 2025', status: 'Pending'},
    {patientName: 'Christelle Pelaya', doctorName: 'Hiro Mataba', date: 'July 2, 2025', status: 'Canceled'},
    {patientName: 'Herve Mashukane', doctorName: 'Christelle Pelaya', date: 'March 22, 2025', status: 'Completed'},
    {patientName: 'Hiro Mataba', doctorName: 'Herve Mashukane', date: 'February 18, 2025', status: 'Pending'},
    {patientName: 'Christelle Pelaya', doctorName: 'Hiro Mataba', date: 'January 15, 2025', status: 'Canceled'},
  ]
}
