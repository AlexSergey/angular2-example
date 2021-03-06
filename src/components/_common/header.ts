import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'header',
    template: `${require('!html!./header.html')}`,
    directives: [ ROUTER_DIRECTIVES]
})
export default class Header{}