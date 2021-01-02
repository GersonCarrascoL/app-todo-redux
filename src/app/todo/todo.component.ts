import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';
import { ToogleAllTodoAction } from './todo.actions';

@Component({
	selector: 'app-todo',
	templateUrl: './todo.component.html',
	styles: [
	]
})
export class TodoComponent implements OnInit {

	completed: boolean = false;
	constructor(
		private store: Store<AppState>
	) { }

	ngOnInit(): void {
	}

	toogleAll() {
		this.completed = !this.completed;
		const accion = new ToogleAllTodoAction(this.completed);
		this.store.dispatch(accion);
	}
}
