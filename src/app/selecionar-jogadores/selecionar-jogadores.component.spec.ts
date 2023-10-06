import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarJogadoresComponent } from './selecionar-jogadores.component';

describe('SelecionarJogadoresComponent', () => {
  let component: SelecionarJogadoresComponent;
  let fixture: ComponentFixture<SelecionarJogadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecionarJogadoresComponent]
    });
    fixture = TestBed.createComponent(SelecionarJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
