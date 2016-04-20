import 'zone.js';
import 'reflect-metadata';
import {provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import RootComponent from './router.ts';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';
import TodoService from './services/todolist';

bootstrap(RootComponent, [
    TodoService,
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'})
]);