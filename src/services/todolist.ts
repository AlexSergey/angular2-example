import {Injectable} from 'angular2/core';
import TodoModel from '../models/todolist';

@Injectable()
export default class TodoService {
    todos = []

    addTodo(todo:TodoModel) {
        this.todos = [...this.todos, todo];
    }

    toggleTodo(todo: TodoModel) {
        const i = this.todos.indexOf(todo);
        const status = todo.status === 'started' ? 'completed' : 'started';
        const toggleTodo = Object.assign({}, todo, {status});
        var newTodo = new TodoModel(toggleTodo.title);
        newTodo.status = toggleTodo.status;

        this.todos = [
            ...this.todos.slice(0, i),
            newTodo,
            ...this.todos.slice(i + 1)
        ];
    }
}