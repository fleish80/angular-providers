import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustUseComponent } from './just-use.component';

describe('JustUseComponent', () => {
  let component: JustUseComponent;
  let fixture: ComponentFixture<JustUseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustUseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
