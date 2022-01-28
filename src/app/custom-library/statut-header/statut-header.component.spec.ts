import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutHeaderComponent } from './statut-header.component';

describe('StatutHeaderComponent', () => {
  let component: StatutHeaderComponent;
  let fixture: ComponentFixture<StatutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatutHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
