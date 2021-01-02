import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';

@Component({
	selector: 'app-todo-list',
	templateUrl: './todo-list.component.html',
	styles: [
	]
})
export class TodoListComponent implements OnInit {

	todos: Todo[] = [];
	filtro: string;

	constructor(
		private store: Store<AppState>
	) { }

	ngOnInit(): void {
		this.store.subscribe(state => {
			this.todos = state.todos;
			this.filtro = state.filtro;
		});
	}

}
