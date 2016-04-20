import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'todo-item-renderer',
    template: `
    <button (click)="toggle.emit(todo)">+</button>
    <span>{{todo.title}}</span>
    `
})
export default class TodoItemRenderer {
    @Input() todo;
    @Output() toggle = new EventEmitter();
}