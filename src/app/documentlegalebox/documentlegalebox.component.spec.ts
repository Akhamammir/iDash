import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentlegaleboxComponent } from './documentlegalebox.component';

describe('DocumentlegaleboxComponent', () => {
  let component: DocumentlegaleboxComponent;
  let fixture: ComponentFixture<DocumentlegaleboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentlegaleboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentlegaleboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
