import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MedicationFormComponent } from './medication-form/medication-form.component';

@Component({
  selector: 'app-medication-tracker',
  standalone: true,
  imports: [CommonModule, MedicationFormComponent],
  templateUrl: './medication-tracker.component.html',
  styleUrl: './medication-tracker.component.css'
})
export class MedicationTrackerComponent {
  isFormVisible: boolean = false;
  medicationsTracker: any = [
  {
    name: 'Amoxicillin', 
    dosage: '500mg', 
    schedule: 'Twice a day', 
    status: 'Active', 
    editBtn: 'Edit', 
    deleteBtn: 'Delete'
  },
  {
    name: 'Vitamin C', 
    dosage: '1000mg', 
    schedule: 'Once a day', 
    status: 'Pending', 
    editBtn: 'Edit', 
    deleteBtn: 'Delete'
  },
  {
    name: 'Ibuprofen', 
    dosage: '200mg', 
    schedule: 'Every 6hours', 
    status: 'Active', 
    editBtn: 'Edit', 
    deleteBtn: 'Delete'
  },
  ]
  closeFormFromChild() {
    this.isFormVisible = false;
  }
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}
