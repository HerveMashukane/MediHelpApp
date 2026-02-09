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
  },
  ]
  closeFormFromChild() {
    this.isFormVisible = false;
  }
  toggleForm() {
    this.isFormVisible = !this.isFormVisible;
  }
}
