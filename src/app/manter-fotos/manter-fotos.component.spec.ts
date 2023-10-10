import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterFotosComponent } from './manter-fotos.component';

describe('ManterFotosComponent', () => {
  let component: ManterFotosComponent;
  let fixture: ComponentFixture<ManterFotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManterFotosComponent]
    });
    fixture = TestBed.createComponent(ManterFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
