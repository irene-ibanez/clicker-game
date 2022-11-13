import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RaisedButtonComponent } from 'src/app/shared/components/raised-button/raised-button.component';
import { PotatoesService } from 'src/app/shared/services/potatoes-service/potatoes-service.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let potatoesService = {
    initGame: jasmine.createSpy('initGame')
  }
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, RaisedButtonComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule],
      providers: [
        FormBuilder,
        { provide: PotatoesService, useValue: potatoesService },
        { provide: Router, useValue: router }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should changed form status to valid when name is ok', () => {
    component.form.controls['name'].setValue('Rosi');
    component.goToGamePage();
    expect (component.form.status).toEqual('VALID');
  })

  it('should called init game when name is ok', () => {
    component.form.controls['name'].setValue('Rosi')
    component.goToGamePage();
    expect(potatoesService.initGame).toHaveBeenCalled();
  })

  it('should navigate to game page when name is ok', () => {
    component.form.controls['name'].setValue('Rosi')
    component.goToGamePage();
    expect(router.navigate).toHaveBeenCalledWith(['/game']);
  })


});
