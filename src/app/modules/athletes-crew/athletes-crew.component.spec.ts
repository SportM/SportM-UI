import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesCrewComponent } from './athletes-crew.component';

describe('AthletesCrewComponent', () => {
  let component: AthletesCrewComponent;
  let fixture: ComponentFixture<AthletesCrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletesCrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletesCrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
