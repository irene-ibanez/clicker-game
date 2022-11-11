import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  buttonLabel = 'Entrar';
  public form: FormGroup;

  constructor(
    private router: Router,
    private readonly _fb: FormBuilder,
    private readonly localStorageService: LocalStorageService
  ) {
    this.form = this._fb.group({
      name: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  goToGamePage() {
    this.localStorageService.setUserName(this.form.value.name);
    this.router.navigate(['/game']);
  }

}
