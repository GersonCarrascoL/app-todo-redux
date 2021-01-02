import { Todo } from "./models/todo.model";
import * as fromTodo from "./todo.actions";

const todo1 = new Todo('Vencer a Thanos');
const todo2 = new Todo('Salvar el mundo');
const todo3 = new Todo('Vencer a Spiderman');

todo2.complete = true;

const estadoInicial: Todo[] = [todo1, todo2, todo3];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones) {
	switch (action.type) {
		case fromTodo.AGREGAR_TODO:
			const todo = new Todo(action.text);
			return [...state, todo];

		case fromTodo.TOOGLE_TODO:
			return state.map(todoEdit => {
				if (todoEdit.id === action.id) {
					return {
						...todoEdit,
						complete: !todoEdit.complete
					};
				} else {
					return todoEdit;
				}
			});

		case fromTodo.TOOGLE_ALL_TODO:
			return state.map(todoEdit => {
				return {
					...todoEdit,
					complete: action.completed
				}
			});

		case fromTodo.EDITAR_TODO:
			return state.map(todoEdit => {
				if (todoEdit.id === action.id) {
					return {
						...todoEdit,
						text: action.text
					}
				} else {
					return todoEdit;
				}
			});

		case fromTodo.BORRAR_TODO:
			return state.filter(todo => todo.id !== action.id);

		case fromTodo.LIMPIAR_COMPLETADO:
			return state.filter(todo => !todo.complete);


		default:
			return state;
	}
}
