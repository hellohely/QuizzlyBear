import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinQuizComponent } from './join-quiz.component';

describe('JoinQuizComponent', () => {
  let component: JoinQuizComponent;
  let fixture: ComponentFixture<JoinQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
