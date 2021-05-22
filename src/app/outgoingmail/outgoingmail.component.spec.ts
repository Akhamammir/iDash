import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutgoingmailComponent } from './outgoingmail.component';

describe('OutgoingmailComponent', () => {
  let component: OutgoingmailComponent;
  let fixture: ComponentFixture<OutgoingmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutgoingmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutgoingmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
