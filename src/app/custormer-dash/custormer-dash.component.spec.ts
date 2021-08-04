import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustormerDashComponent } from './custormer-dash.component';

describe('CustormerDashComponent', () => {
  let component: CustormerDashComponent;
  let fixture: ComponentFixture<CustormerDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustormerDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustormerDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
