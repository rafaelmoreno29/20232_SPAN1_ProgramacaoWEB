import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaFilho2Component } from './tela-filho2.component';

describe('TelaFilho2Component', () => {
  let component: TelaFilho2Component;
  let fixture: ComponentFixture<TelaFilho2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaFilho2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaFilho2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
