import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultComponentComponent } from './consult-component.component';

describe('ConsultComponentComponent', () => {
  let component: ConsultComponentComponent;
  let fixture: ComponentFixture<ConsultComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
