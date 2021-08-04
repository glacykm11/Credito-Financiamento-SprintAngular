import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp03PosContratoComponent } from './sp03-pos-contrato.component';

describe('Sp03PosContratoComponent', () => {
  let component: Sp03PosContratoComponent;
  let fixture: ComponentFixture<Sp03PosContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp03PosContratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp03PosContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
