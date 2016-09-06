import { Directive, Input } from '@angular/core';

@Directive({
    selector: 'param'
})
export class Param {
    @Input() name:string;
    @Input() value:string
}