import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface LaboTest{
  id: number;
  patientName: string;
  testType: string;
  doctorName: string;
  date: string;
  status: string;
}
@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {
  public laboTestSource = new BehaviorSubject<LaboTest[]>([])
  tests$ = this.laboTestSource.asObservable();

  constructor() { }


  addLaboTest(test: LaboTest) {
    const currentTests = this.laboTestSource.value;
    const updatedTests = [...currentTests, test];
    this.laboTestSource.next(updatedTests);
  }
}
