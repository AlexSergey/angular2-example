import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'status-selector',
    template: `
    <ul class="todo-controls">
        <li class="previous">
            <select #sel (change)="select.emit(sel.value)">
            <option *ngFor="#status of statuses">
                {{status}}
            </option>
        </select>
        </li>
    </ul>
    `
})
export default class StatusSelector {
    @Output() select = new EventEmitter();
    statuses = ['started', 'completed'];
    ngOnInit() {
        this.select.emit(this.statuses[0]);
    }
}