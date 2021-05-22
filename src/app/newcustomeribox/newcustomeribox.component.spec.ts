import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcustomeriboxComponent } from './newcustomeribox.component';

describe('NewcustomeriboxComponent', () => {
  let component: NewcustomeriboxComponent;
  let fixture: ComponentFixture<NewcustomeriboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcustomeriboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcustomeriboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
