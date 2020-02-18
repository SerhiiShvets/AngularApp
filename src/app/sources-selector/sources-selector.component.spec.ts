import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesSelectorComponent } from './sources-selector.component';

describe('SourcesSelectorComponent', () => {
  let component: SourcesSelectorComponent;
  let fixture: ComponentFixture<SourcesSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
