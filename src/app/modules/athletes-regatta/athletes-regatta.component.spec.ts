import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesRegattaComponent } from './athletes-regatta.component';

describe('AthletesRegattaComponent', () => {
  let component: AthletesRegattaComponent;
  let fixture: ComponentFixture<AthletesRegattaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthletesRegattaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletesRegattaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
