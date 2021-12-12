import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmaillShowComponent } from './emaill-show.component';

describe('EmaillShowComponent', () => {
  let component: EmaillShowComponent;
  let fixture: ComponentFixture<EmaillShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmaillShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmaillShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
