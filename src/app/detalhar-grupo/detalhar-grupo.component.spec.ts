import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharGrupoComponent } from './detalhar-grupo.component';

describe('DetalharGrupoComponent', () => {
  let component: DetalharGrupoComponent;
  let fixture: ComponentFixture<DetalharGrupoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalharGrupoComponent]
    });
    fixture = TestBed.createComponent(DetalharGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
