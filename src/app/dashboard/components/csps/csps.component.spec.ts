import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CspsComponent } from './csps.component';

describe('CspsComponent', () => {
  let component: CspsComponent;
  let fixture: ComponentFixture<CspsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CspsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CspsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
