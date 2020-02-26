import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesTrainingComponent } from './athletes-training.component';

describe('AthletesTrainingComponent', () => {
  let component: AthletesTrainingComponent;
  let fixture: ComponentFixture<AthletesTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletesTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletesTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
