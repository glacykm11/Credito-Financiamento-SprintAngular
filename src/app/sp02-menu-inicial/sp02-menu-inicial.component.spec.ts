import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sp02MenuInicialComponent } from './sp02-menu-inicial.component';

describe('Sp02MenuInicialComponent', () => {
  let component: Sp02MenuInicialComponent;
  let fixture: ComponentFixture<Sp02MenuInicialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sp02MenuInicialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sp02MenuInicialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
