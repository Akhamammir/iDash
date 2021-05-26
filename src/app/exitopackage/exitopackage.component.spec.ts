import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitopackageComponent } from './exitopackage.component';

describe('ExitopackageComponent', () => {
  let component: ExitopackageComponent;
  let fixture: ComponentFixture<ExitopackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitopackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitopackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
