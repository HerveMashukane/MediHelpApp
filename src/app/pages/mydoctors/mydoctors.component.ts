import { Component } from '@angular/core';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-mydoctors',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './mydoctors.component.html',
  styleUrl: './mydoctors.component.css'
})
export class MydoctorsComponent {
  doctors: any = [
    {
      preferedName: 'Dr. Herve', 
      fullName: 'Dr. Herve Mashukane', 
      image: '/assets/images/herve.png', 
      alt: 'Dr. Herve Mashukane', 
      speciality: 'Generalist', 
      viewBtn: 'View', 
      contactBtn: 'Contact'
    },
    {
      preferedName: 'Dr. Herve', 
      fullName: 'Dr. Herve Mashukane', 
      image: '/assets/images/herve.png', 
      alt: 'Dr. Herve Mashukane', 
      speciality: 'Cardiologist', 
      viewBtn: 'View', 
      contactBtn: 'Contact'
    },
    {
      preferedName: 'Dr. Herve', 
      fullName: 'Dr. Herve Mashukane', 
      image: '/assets/images/herve.png', 
      alt: 'Dr. Herve Mashukane', 
      speciality: 'Dermatologist', 
      viewBtn: 'View', 
      contactBtn: 'Contact'
    },
    {
      preferedName: 'Dr. Herve', 
      fullName: 'Dr. Herve Mashukane', 
      image: '/assets/images/herve.png', 
      alt: 'Dr. Herve Mashukane', 
      speciality: 'Neurologist', 
      viewBtn: 'View', 
      contactBtn: 'Contact'
    },
    {
      preferedName: 'Dr. Herve', 
      fullName: 'Dr. Herve Mashukane', 
      image: '/assets/images/herve.png', 
      alt: 'Dr. Herve Mashukane', 
      speciality: 'Surgerist', 
      viewBtn: 'View', 
      contactBtn: 'Contact'
    },
    {
      preferedName: 'Dr. Herve', 
      fullName: 'Dr. Herve Mashukane', 
      image: '/assets/images/herve.png', 
      alt: 'Dr. Herve Mashukane', 
      speciality: 'Oncologist', 
      viewBtn: 'View', 
      contactBtn: 'Contact'
    },
  ]
}