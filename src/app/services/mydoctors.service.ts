import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  private doctorsSource = new BehaviorSubject<Doctor[]>([]);
  doctors$ = this.doctorsSource.asObservable();

  addDoctor(doctor: Doctor) {
    const currectDoctor = this.doctorsSource.value;
    this.doctorsSource.next([...currectDoctor, doctor]);
  }
}
