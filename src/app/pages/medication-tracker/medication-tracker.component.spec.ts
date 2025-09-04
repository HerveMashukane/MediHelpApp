import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationTrackerComponent } from './medication-tracker.component';

describe('MedicationTrackerComponent', () => {
  let component: MedicationTrackerComponent;
  let fixture: ComponentFixture<MedicationTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicationTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
