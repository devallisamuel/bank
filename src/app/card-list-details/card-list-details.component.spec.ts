import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListDetailsComponent } from './card-list-details.component';

describe('CardListDetailsComponent', () => {
  let component: CardListDetailsComponent;
  let fixture: ComponentFixture<CardListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
