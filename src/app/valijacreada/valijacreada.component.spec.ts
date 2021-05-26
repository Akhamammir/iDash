import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValijacreadaComponent } from './valijacreada.component';

describe('ValijacreadaComponent', () => {
  let component: ValijacreadaComponent;
  let fixture: ComponentFixture<ValijacreadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValijacreadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValijacreadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
