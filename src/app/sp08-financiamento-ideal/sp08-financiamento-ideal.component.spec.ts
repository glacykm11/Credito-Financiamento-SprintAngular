import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp08FinanciamentoIdealComponent } from './sp08-financiamento-ideal.component';

describe('Sp08FinanciamentoIdealComponent', () => {
  let component: Sp08FinanciamentoIdealComponent;
  let fixture: ComponentFixture<Sp08FinanciamentoIdealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp08FinanciamentoIdealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp08FinanciamentoIdealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
