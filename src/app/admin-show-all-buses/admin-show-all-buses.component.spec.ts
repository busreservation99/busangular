import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowAllBusesComponent } from './admin-show-all-buses.component';

describe('AdminShowAllBusesComponent', () => {
  let component: AdminShowAllBusesComponent;
  let fixture: ComponentFixture<AdminShowAllBusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowAllBusesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowAllBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
