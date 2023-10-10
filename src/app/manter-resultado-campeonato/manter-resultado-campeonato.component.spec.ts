import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterResultadoCampeonatoComponent } from './manter-resultado-campeonato.component';

describe('ManterResultadoCampeonatoComponent', () => {
  let component: ManterResultadoCampeonatoComponent;
  let fixture: ComponentFixture<ManterResultadoCampeonatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManterResultadoCampeonatoComponent]
    });
    fixture = TestBed.createComponent(ManterResultadoCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
