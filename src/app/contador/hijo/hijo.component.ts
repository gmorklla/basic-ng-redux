import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { ContadorState } from '../contador.reducer.interface';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [],
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<ContadorState>) {
    store
      .select('contador')
      .pipe(tap((contador) => (this.contador = contador)))
      .subscribe();
  }

  ngOnInit(): void {}

  multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 2 }));
  }

  dividir() {
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }
}
