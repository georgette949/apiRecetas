import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunkapiComponent } from './punkapi.component';

describe('PunkapiComponent', () => {
  let component: PunkapiComponent;
  let fixture: ComponentFixture<PunkapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PunkapiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunkapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
