import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/models/todo.model';
import * as fromFiltro from '../filter/filter.actions';

@Pipe({
	name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

	transform(todos: Todo[], filtro: fromFiltro.filtrosValidos): Todo[] {
		switch (filtro) {
			case 'completados':
				return todos.filter(todo => todo.complete);

			case 'pendientes':
				return todos.filter(todo => !todo.complete);

			default:
				return todos;
		}

		return todos;
	}

}
