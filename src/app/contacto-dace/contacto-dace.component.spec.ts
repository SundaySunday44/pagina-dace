import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoDaceComponent } from './contacto-dace.component';

describe('ContactoDaceComponent', () => {
  let component: ContactoDaceComponent;
  let fixture: ComponentFixture<ContactoDaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoDaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoDaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
