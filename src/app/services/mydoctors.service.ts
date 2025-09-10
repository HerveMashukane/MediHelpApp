import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

export interface Doctor {
  fullName: string,
  preferedName: string,
  speciality: string,
  image: string,
}
@Injectable({
  providedIn: 'root'
})

export class MydoctorsService {
  private doctors: Doctor[] = [];
  private doctorsSource = new BehaviorSubject<Doctor[]>([]);
  doctors$ = this.doctorsSource.asObservable();

  // check if platform is a browser
  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.doctors = isPlatformBrowser(platformId) ? this.loadDoctorsFromLocalStorage() : [];
    this.doctorsSource?.next(this.doctors);
  }  

  // load doctors from localStorage
  private loadDoctorsFromLocalStorage(): Doctor[] {
    if (typeof localStorage !== 'undefined') {
      const storedDoctors = localStorage.getItem('doctors');
      return storedDoctors ? JSON.parse(storedDoctors) : [];
    }
    return [];
  }

  // doctors to localStorage
  private saveDoctorsToLocalStorage(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('doctors', JSON.stringify(this.doctors));
    }
  }

  addDoctor(doctor: Doctor) {
    const currectDoctor = this.doctorsSource.value;
    this.doctorsSource.next([...currectDoctor, doctor]);
    this.saveDoctorsToLocalStorage();
  }
}
