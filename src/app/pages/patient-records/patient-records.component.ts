import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-patient-records',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-records.component.html',
  styleUrl: './patient-records.component.css'
})
export class PatientRecordsComponent {
  patients: any = [
    {
      preferedName: 'Christelle', 
      fullName: 'Christelle Pelaya', 
      image: '/assets/images/herve.png', 
      alt: 'Christelle Pelaya', 
      department: 'Dermatology', 
      viewBtn: 'View', 
      editBtn: 'Edit'
    },
    {
      preferedName: 'Herve', 
      fullName: 'Herve Mashukane', 
      image: '/assets/images/herve.png', 
      alt: 'Herve Mashukane', 
      department: 'Cardiology', 
      viewBtn: 'View', 
      editBtn: 'Edit'
    },
    {
      preferedName: 'Hiro', 
      fullName: 'Hiro Mataba', 
      image: '/assets/images/herve.png', 
      alt: 'Hiro Mataba', 
      department: 'Dermatology', 
      viewBtn: 'View', 
      editBtn: 'Edit'
    },
    {
      preferedName: 'Patricia', 
      fullName: 'Patricia Masiri', 
      image: '/assets/images/herve.png', 
      alt: 'Patricia Masiri', 
      department: 'Neurology', 
      viewBtn: 'View', 
      editBtn: 'Edit'
    },
    {
      preferedName: 'Herve', 
      fullName: 'Herve Mashukane', 
      image: '/assets/images/herve.png', 
      alt: 'Herve Mashukane', 
      department: 'Surgery', 
      viewBtn: 'View', 
      editBtn: 'Edit'
    },
    {
      preferedName: 'Hiro', 
      fullName: 'Hiro Mataba', 
      image: '/assets/images/herve.png', 
      alt: 'Hiro Mataba', 
      department: 'Oncology', 
      viewBtn: 'View', 
      editBtn: 'Edit'
    },
  ]
}
