import {Pipe} from 'angular2/core';

@Pipe({
    name: 'started'
})
export default class StartedPipe {
    transform(value, [status]) {
        return value.filter((item) => item.status === status);
    }
}