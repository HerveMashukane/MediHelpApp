import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-medication-tracker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medication-tracker.component.html',
  styleUrl: './medication-tracker.component.css'
})
export class MedicationTrackerComponent {
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
}
