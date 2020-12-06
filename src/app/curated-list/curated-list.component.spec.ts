import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuratedListComponent } from './curated-list.component';

describe('CuratedListComponent', () => {
  let component: CuratedListComponent;
  let fixture: ComponentFixture<CuratedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuratedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuratedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
