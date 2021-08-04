import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp05FinanciamentoDeCarrosComponent } from './sp05-financiamento-de-carros.component';

describe('Sp05FinanciamentoDeCarrosComponent', () => {
  let component: Sp05FinanciamentoDeCarrosComponent;
  let fixture: ComponentFixture<Sp05FinanciamentoDeCarrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp05FinanciamentoDeCarrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp05FinanciamentoDeCarrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
