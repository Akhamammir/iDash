import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellpackageComponent } from './sellpackage.component';

describe('SellpackageComponent', () => {
  let component: SellpackageComponent;
  let fixture: ComponentFixture<SellpackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellpackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
