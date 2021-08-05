import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp03RenegociacaoComponent } from './sp03-renegociacao.component';

describe('Sp03RenegociacaoComponent', () => {
  let component: Sp03RenegociacaoComponent;
  let fixture: ComponentFixture<Sp03RenegociacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp03RenegociacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp03RenegociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
