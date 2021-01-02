import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { BorrarTodoAction, EditarTodoAction, ToogleTodoAction } from '../todo.actions';

@Component({
	selector: 'app-todo-item',
	templateUrl: './todo-item.component.html',
	styles: [
	]
})
export class TodoItemComponent implements OnInit {
	@ViewChild('txtInputFisico') txtInputFisico: ElementRef;

	@Input() todo: Todo;

	chkField: FormControl;
	txtInput: FormControl;

	editing: boolean;

	constructor(
		private store: Store<AppState>
	) { }

	ngOnInit(): void {
		this.chkField = new FormControl(this.todo.complete);
		this.txtInput = new FormControl(this.todo.text, [Validators.required]);

		this.chkField.valueChanges.subscribe(() => {
			const accion = new ToogleTodoAction(this.todo.id);
			this.store.dispatch(accion);
		})
	}

	editar() {
		this.editing = true;
		setTimeout(() => {
			this.txtInputFisico.nativeElement.select();
		}, 1)
	}

	terminarEdicion() {
		this.editing = false;

		if (this.txtInput.invalid) {
			return;
		}

		if (this.txtInput.value === this.todo.text) {
			return;
		}

		const accion = new EditarTodoAction(this.todo.id, this.txtInput.value);
		this.store.dispatch(accion);

	}

	borrarTodo() {
		const accion = new BorrarTodoAction(this.todo.id);
		this.store.dispatch(accion);
	}
}
