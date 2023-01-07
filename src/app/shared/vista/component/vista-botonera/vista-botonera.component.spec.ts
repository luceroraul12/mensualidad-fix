import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaBotoneraComponent } from './vista-botonera.component';

describe('VistaBotoneraComponent', () => {
  let component: VistaBotoneraComponent;
  let fixture: ComponentFixture<VistaBotoneraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaBotoneraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaBotoneraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
