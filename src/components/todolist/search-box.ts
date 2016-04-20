import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'search-box',
    template: `
    <div>
        <input #inp type="text" (input)="update.emit(inp.value)">
    </div>
    `
})
export default class SearchBox {
    @Output() update = new EventEmitter();

    ngOnInit() {
        this.update.emit('');
    }
}