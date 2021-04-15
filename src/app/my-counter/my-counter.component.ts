import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { decrement, increment, reset } from "../counter.actions";

@Component({
  selector: "app-my-counter",
  templateUrl: "./my-counter.component.html"
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    // Todo: connect 'this.count$' stream to the current store 'count' state
    this.count$ = store.select("count");
  }

  increment() {
    // Todo: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement() {
    // Todo: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset() {
    // Todo: Dispatch a reset action
    this.store.dispatch(reset());
  }
}
