import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdtdetailsComponent } from './pdtdetails.component';

describe('PdtdetailsComponent', () => {
  let component: PdtdetailsComponent;
  let fixture: ComponentFixture<PdtdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdtdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdtdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
