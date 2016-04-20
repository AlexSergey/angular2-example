import {Component, Injectable} from 'angular2/core';
import TodoService from '../../services/todolist';
import TodoModel from '../../models/todolist';

@Component({
    selector: 'todo-input',
    template: `
        <form (submit)="onSubmit()">
            <input type="text" [(ngModel)]="todoModel.title">
        </form>
    `
})
export default class TodoInput {
    todoModel: TodoModel = new TodoModel();

    constructor(public todoService: TodoService) {}

    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }
}