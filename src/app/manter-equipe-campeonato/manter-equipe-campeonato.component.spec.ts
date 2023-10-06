import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterEquipeCampeonatoComponent } from './manter-equipe-campeonato.component';

describe('ManterEquipeCampeonatoComponent', () => {
  let component: ManterEquipeCampeonatoComponent;
  let fixture: ComponentFixture<ManterEquipeCampeonatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManterEquipeCampeonatoComponent]
    });
    fixture = TestBed.createComponent(ManterEquipeCampeonatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
