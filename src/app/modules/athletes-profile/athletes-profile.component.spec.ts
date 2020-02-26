import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesProfileComponent } from './athletes-profile.component';

describe('AthletesProfileComponent', () => {
  let component: AthletesProfileComponent;
  let fixture: ComponentFixture<AthletesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
