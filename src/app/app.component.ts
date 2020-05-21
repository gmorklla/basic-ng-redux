import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import * as actions from './contador/contador.actions';
import { ContadorState } from './contador/contador.reducer.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contador: number;

  constructor(private store: Store<ContadorState>) {
    store
      .select('contador')
      .pipe(tap((contador) => (this.contador = contador)))
      .subscribe();
  }

  incrementar() {
    this.store.dispatch(actions.incrementar());
  }

  reducir() {
    this.store.dispatch(actions.decrementar());
  }
}
