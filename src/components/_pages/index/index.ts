import {Component} from 'angular2/core';

@Component({
    selector: 'home',
    template: `${require('!html!./template.html')}`
})
export default class Index {}