import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterPartidaCampeonatoComponent } from './manter-partida-campeonato.component';

describe('ManterPartidaCampeonatoComponent', () => {
  let component: ManterPartidaCampeonatoComponent;
  let fixture: ComponentFixture<ManterPartidaCampeonatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManterPartidaCampeonatoComponent]
    });
    fixture = TestBed.createComponent(ManterPartidaCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
