import {Component} from 'angular2/core';
const url = 'https://restcountries.eu/rest/v1/currency/eur';

@Component({
    selector: 'home',
    template: `${require('!html!./template.html')}`
})
export default class Datafetch {
    public issues: any;

    constructor() {
        window.fetch(url).then((r) => r.json()).then(data => {
            this.issues = data;
        });
    }
}