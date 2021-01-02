import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as fromFiltro from '../../filter/filter.actions';
import * as fromTodo from '../todo.actions';

@Component({
	selector: 'app-todo-footer',
	templateUrl: './todo-footer.component.html',
	styles: [
	]
})
export class TodoFooterComponent implements OnInit {

	pendientes: number;

	filtrosValidos: fromFiltro.filtrosValidos[] = ['todos', 'completados', 'pendientes']
	filtroActual: fromFiltro.filtrosValidos;

	constructor(private store: Store<AppState>) { }

	ngOnInit(): void {
		this.store.subscribe(state => {
			this.contarPendientes(state.todos);
			this.filtroActual = state.filtro;
		})
	}

	cambiarFiltro(nuevoFiltro: fromFiltro.filtrosValidos) {
		const accion = new fromFiltro.SetFilterAction(nuevoFiltro);
		this.store.dispatch(accion);
	}

	limpiarCompletados() {
		const accion = new fromTodo.LimpiarCompletadosAction();
		this.store.dispatch(accion);
	}

	contarPendientes(todos: Todo[]) {
		this.pendientes = todos.filter(todo => !todo.complete).length;
	}
}
