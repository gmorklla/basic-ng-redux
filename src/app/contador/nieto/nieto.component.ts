import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ContadorState } from '../contador.reducer.interface';
import { reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: [],
})
export class NietoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<ContadorState>) {
    store
      .select('contador')
      .pipe(tap((val) => (this.contador = val)))
      .subscribe();
  }

  ngOnInit(): void {}

  reset() {
    this.store.dispatch(reset());
  }
}
