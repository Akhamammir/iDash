import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValijaComponent } from './valija.component';

describe('ValijaComponent', () => {
  let component: ValijaComponent;
  let fixture: ComponentFixture<ValijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValijaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
