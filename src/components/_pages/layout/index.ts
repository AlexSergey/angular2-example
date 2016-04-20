import {Component, ViewEncapsulation} from 'angular2/core';
import Header from '../../_common/header.ts';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'layout',
    encapsulation: ViewEncapsulation.None,
    template: `${require('!html!./template.html')}`,
    styles: [`${require('!style!css!postcss!less!../../../assets/stylesheets/_include.less')}`],
    directives: [ROUTER_DIRECTIVES, Header]
})
export default class Layout{}