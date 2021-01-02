import { Action } from "@ngrx/store";

export const AGREGAR_TODO = '[TODO] Agregar TODO';
export const TOOGLE_TODO = '[TODO] Toogle TODO';
export const TOOGLE_ALL_TODO = '[TODO] Toogle All Todo'
export const EDITAR_TODO = '[TODO] Editar TODO';
export const BORRAR_TODO = '[TODO] Borrar TODO';
export const LIMPIAR_COMPLETADO = '[TODO] Limpiar Completados';

export class AgregarTodoAction implements Action {
	readonly type = AGREGAR_TODO;

	constructor(public text: string) { }
}

export class ToogleTodoAction implements Action {
	readonly type = TOOGLE_TODO;

	constructor(public id: number) { }
}

export class ToogleAllTodoAction implements Action {
	readonly type = TOOGLE_ALL_TODO;

	constructor(public completed: boolean) { }
}

export class EditarTodoAction implements Action {
	readonly type = EDITAR_TODO;

	constructor(public id: number, public text: string) { }
}

export class BorrarTodoAction implements Action {
	readonly type = BORRAR_TODO;

	constructor(public id: number) { }
}

export class LimpiarCompletadosAction implements Action {
	readonly type = LIMPIAR_COMPLETADO;
}

export type Acciones = AgregarTodoAction |
	ToogleTodoAction |
	ToogleAllTodoAction |
	EditarTodoAction |
	BorrarTodoAction |
	LimpiarCompletadosAction;
