import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizLobbyComponent } from './quiz-lobby.component';

describe('QuizLobbyComponent', () => {
  let component: QuizLobbyComponent;
  let fixture: ComponentFixture<QuizLobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizLobbyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
