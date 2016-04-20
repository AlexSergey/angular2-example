import {Component} from 'angular2/core';
import TodoInput from './todo-input';
import TodoList from './todolist';
import StatusSelector from './status-selector';
import SearchBox from './search-box';

@Component({
    selector: 'todo',
    template: `
    <div class="todo">
        <ul class="todo-controls">
            <li>Add new: <todo-input></todo-input></li>
            <li style="float: right">Search: <search-box (update)="term = $event"></search-box></li>
        </ul>
        <todolist
            [status]="status"
            [term]="term"
        ></todolist>
        <status-selector (select)="status = $event"></status-selector>
    </div>
    `,
    directives: [TodoInput, TodoList, StatusSelector, SearchBox]
})
export default class Todo {}