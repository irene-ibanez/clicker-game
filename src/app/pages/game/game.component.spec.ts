import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { PotatoesService } from 'src/app/shared/services/potatoes-service/potatoes-service.service';
import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let potatoesService = {
    getCurrentPotatoData: jasmine.createSpy('getCurrentPotatoData'),
    addPotatoes: jasmine.createSpy('addPotatoes'),
    extraPotatoes: jasmine.createSpy('extraPotatoes'),
    exitSession: jasmine.createSpy('exitSession')
  }

  let router = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ],
      providers: [
        { provide: PotatoesService, useValue: potatoesService },
        { provide: Router, useValue: router }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.disableAutoClickerButton = true;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call get current potato data in ngOnInit', () => {
    component.ngOnInit();
    expect(potatoesService.getCurrentPotatoData).toHaveBeenCalled();
  });

  it('should disableAutoClickerButton to be true in ngOnInit', () => {
    component.ngOnInit();
    expect(component.disableAutoClickerButton).toBeTrue;
  });

  it('should call addPotatos when button is clicked', () => {
    component.addPotatoes();
    expect(potatoesService.addPotatoes).toHaveBeenCalled();
  });

  it('should call extraPotatos when button is clicked', () => {
    component.extraPotatoes();
    expect(potatoesService.extraPotatoes).toHaveBeenCalled();
  });

  it('should call exit session when button is clicked', () => {
    component.exitSession();
    expect(potatoesService.exitSession).toHaveBeenCalled();
  })

  it('should navigate to home when exit button is clicked', () => {
    component.exitSession();
    expect(router.navigate).toHaveBeenCalledWith(['/home']);
  })
});
