import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Doctor {
  fullName: string;
  preferedName: string;
  speciality: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class MydoctorsService {
  private doctorsSource = new BehaviorSubject<Doctor[]>(this.loadDoctorsFromLocalStorage());
  doctors$ = this.doctorsSource.asObservable();

  constructor() {}

  // saveDoctors to local storage
  private saveDoctorsToLocalStorage(doctors: Doctor[]) {
    localStorage.setItem('doctors', JSON.stringify(doctors));
  }

  private loadDoctorsFromLocalStorage() : Doctor[] {
    const storedDoctors = localStorage.getItem('doctors');
    return storedDoctors ? JSON.parse(storedDoctors) : []
  }
  // Add doctor
  addDoctor(doctor: Doctor) {
    const currentDoctors = this.doctorsSource.value;
    const updatedDoctors = [...currentDoctors, doctor];
    this.doctorsSource.next(updatedDoctors);
    this.saveDoctorsToLocalStorage(updatedDoctors);
  }
}
