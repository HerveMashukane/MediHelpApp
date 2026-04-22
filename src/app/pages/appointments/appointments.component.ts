import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppointmentsFormComponent } from './appointments-form/appointments-form.component';
import { AppointmentService, Appointment } from '../../services/appointments/appointment.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [CommonModule, AppointmentsFormComponent],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.css'
})
export class AppointmentsComponent {

  appointments$: Observable<Appointment[]>;
  isFormVisible: boolean = false;

  constructor(private appointmentService: AppointmentService) {
    this.appointments$ = this.appointmentService.appointments$;
  }

  toggleFormVisibility() {
    this.isFormVisible = !this.isFormVisible;
  }

  // toggle menu actions in the appointments table
  activeMenuIndex: number | null = null;
  toggleMenu(index: number) {
    this.activeMenuIndex = this.activeMenuIndex === index ? null : index;
  }

  // get all appointments
  get filteredAppointments() {
    const allAppointments = this.appointmentService.appointmentsSource.value;
    return allAppointments;
  }
}
