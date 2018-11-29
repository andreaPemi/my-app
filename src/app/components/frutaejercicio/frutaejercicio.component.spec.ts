import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutaejercicioComponent } from './frutaejercicio.component';

describe('FrutaejercicioComponent', () => {
  let component: FrutaejercicioComponent;
  let fixture: ComponentFixture<FrutaejercicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrutaejercicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrutaejercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
