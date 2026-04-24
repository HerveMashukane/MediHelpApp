import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { SlotsService } from '../../../services/slots/slots.service';
import { AppointmentService } from '../../../services/appointments/appointment.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointments-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointments-form.component.html',
  styleUrl: './appointments-form.component.css'
})
export class AppointmentsFormComponent {

  // ================= DOCTORS =================
  doctors = [
    { id: 1, name: 'Dr Herve', startTime: '07:00', endTime: '12:00', slotDuration: 30},
    { id: 2, name: 'Dr Alice', startTime: '12:00', endTime: '17:00', slotDuration: 20 }
  ];

  // ================= FORM STATE =================
  form = {
    patientName: '',
    doctor: '',
    date: '',
    time: '',
    status: 'Pending',
    type: '',
    notes: ''
  };

  // ================= SLOTS =================
  slots: any[] = [];
  selectedDoctor: any = null;

  constructor(
    private slotsService: SlotsService,
    private appointmentService: AppointmentService
  ) {}

  // ================= LOAD SLOTS =================
  loadSlots() {
    // find selected doctor object
    this.selectedDoctor = this.doctors.find(
      d => d.name === this.form.doctor
    );

    if (!this.selectedDoctor || !this.form.date) return;

    this.slots = this.slotsService.generateSlots(
      this.selectedDoctor.startTime,
      this.selectedDoctor.endTime,
      this.selectedDoctor.slotDuration
    );
  }

  // ================= SELECT SLOT =================
  selectedSlot = '';

  selectSlot(slot: any) {
    if (!slot.booked) {
      this.selectedSlot = slot.time;
      this.form.time = slot.time;
    }
  }

  // ================= CLOSE FORM =================
  @Output() close = new EventEmitter<void>();
  onCancel() {
    this.close.emit();
  }

  // ================= BOOK APPOINTMENT =================
  bookAppointment() {
    if(
      this.form.patientName &&
      this.form.doctor &&
      this.form.date &&
      this.form.status &&
      this.form.time &&
      this.form.type
    ){
      const newAppointment = {
        id: Date.now(),
        patientName: this.form.patientName,
        doctorName: this.form.doctor,
        date: this.form.date,
        time: this.form.time,
        status: this.form.status,
        type: this.form.type,
        notes: this.form.notes
      }
      // add appointment
      this.appointmentService.addAppointment(newAppointment);
      // reset form after submit
      this.resetForm();
      // close form
      this.onCancel();
    }
  }

  // ================= RESET FORM =================
  resetForm() {
    this.form = {
      patientName: '',
      doctor: '',
      date: '',
      time: '',
      status: 'Active',
      type: '',
      notes: ''
    };

    this.selectedSlot = '';
    this.slots = [];
    this.selectedDoctor = null;
  }
}