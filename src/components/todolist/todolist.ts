import {Component, Input} from 'angular2/core';
import TodoService from '../../services/todolist';
import TodoItemRenderer from './todo-item-renderer';
import StartedPipe from '../../pipes/todolist.started';
import SearchPipe from '../../pipes/todolist.search';

@Component({
    selector: 'todolist',
    directives: [TodoItemRenderer],
    pipes: [StartedPipe, SearchPipe],
    template: `
    <ul class="todo-list">
        <li *ngFor="#todo of todoService.todos
        | started : status
        | search  : term"
         [ngClass]="todo.status"
        >
            <todo-item-renderer
            (toggle)="todoService.toggleTodo($event)"
            [todo]="todo"
            ></todo-item-renderer>
        </li>
    </ul>
    `
})

export default class TodoList {
    @Input() status;
    @Input() term;

    constructor(public todoService: TodoService) {}
}