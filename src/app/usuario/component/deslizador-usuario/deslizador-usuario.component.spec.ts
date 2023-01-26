import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeslizadorUsuarioComponent } from './deslizador-usuario.component';

describe('DeslizadorUsuarioComponent', () => {
  let component: DeslizadorUsuarioComponent;
  let fixture: ComponentFixture<DeslizadorUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeslizadorUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeslizadorUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
