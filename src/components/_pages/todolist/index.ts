import {Component} from 'angular2/core';
import Todo from '../../todolist/index.ts'

@Component({
    selector: 'todo',
    template: '<todo></todo>',
    directives: [Todo]
})
export default class Todolist {}