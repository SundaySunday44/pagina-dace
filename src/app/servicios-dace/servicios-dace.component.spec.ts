import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDaceComponent } from './servicios-dace.component';

describe('ServiciosDaceComponent', () => {
  let component: ServiciosDaceComponent;
  let fixture: ComponentFixture<ServiciosDaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosDaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosDaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
