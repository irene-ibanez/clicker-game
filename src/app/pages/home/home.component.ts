import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PotatoesService } from 'src/app/shared/services/potatoes-service/potatoes-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public form: FormGroup;

  constructor(
    private router: Router,
    private readonly _fb: FormBuilder,
    private readonly potatoesService: PotatoesService
  ) {
    this.form = this._fb.group({
      name: ['', [Validators.required]]
    })
  }

  goToGamePage() {
    if(this.form.status === 'VALID') {
      this.potatoesService.initGame(this.form.value.name);
      this.router.navigate(['/game']);
    }
  }

}
