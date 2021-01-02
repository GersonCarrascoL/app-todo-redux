import { stat } from 'fs';
import { from } from 'rxjs';
import * as fromFiltro from './filter.actions';

const estadoInicial: fromFiltro.filtrosValidos = 'todos';

export function filtroReducer(state = estadoInicial, action: fromFiltro.acciones): fromFiltro.filtrosValidos {
	switch (action.type) {
		case fromFiltro.SET_FILTER:

			return action.filter;

		default:
			return state;
	}
}