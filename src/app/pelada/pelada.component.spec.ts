import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeladaComponent } from './pelada.component';

describe('PeladaComponent', () => {
  let component: PeladaComponent;
  let fixture: ComponentFixture<PeladaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeladaComponent]
    });
    fixture = TestBed.createComponent(PeladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
