import {Component} from 'angular2/core';
import {RouteConfig} from 'angular2/router';
import Index from './components/_pages/index/index.ts';
import Todolist from './components/_pages/todolist/index.ts';
import Layout from './components/_pages/layout/index.ts';
import Datafetch from './components/_pages/datafetch/index.ts';

@Component({
    selector: 'my-app',
    template: `<layout></layout>`,
    directives: [ Layout]
})
@RouteConfig([
    {path: '/', component: Index, as: 'Index'},
    {path: '/todolist/', component: Todolist, as: 'TodoList'},
    {path: '/datafetch/', component: Datafetch, as: 'Datafetch'}
])
export default class RootComponent{
    constructor() {

        setTimeout(()=> {
            console.log('tick');
        }, 8000)
    }
}
