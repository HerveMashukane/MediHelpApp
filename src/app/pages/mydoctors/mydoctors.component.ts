import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { DoctorsFormComponent } from "./doctors-form/doctors-form.component";
import { Observable } from 'rxjs';
import { Doctor, MydoctorsService } from '../../services/mydoctors.service';
import { ModalComponent } from "../../shared/modal/modal.component";

@Component({
  selector: 'app-mydoctors',
  standalone: true,
  imports: [CommonModule, DoctorsFormComponent, ModalComponent],
  templateUrl: './mydoctors.component.html',
  styleUrl: './mydoctors.component.css',
})
export class MydoctorsComponent {
  doctors$: Observable<Doctor[]>;

  constructor(private doctorsService: MydoctorsService) {
    this.doctors$ = this.doctorsService.doctors$;
  }

  // toggle form
  isFormVisible: boolean = false;
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }

  // view doctor's details
  selectedDoctor: Doctor | null = null;
  isModelOpen: boolean = false;

  viewDoctor(doctor: Doctor) {
    this.selectedDoctor = doctor;
    this.isModelOpen = true;
  }

  // close details
  closeModel() {
    this.selectedDoctor = null;
    this.isModelOpen = false;
  }
}