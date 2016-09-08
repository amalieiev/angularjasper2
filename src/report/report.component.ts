import {
    Component,
    OnInit,
    Input,
    Output,
    ViewChild,
    ContentChildren,
    ElementRef,
    EventEmitter
} from '@angular/core';

import { AngularJasper } from "../angular-jasper.service";
import { Param } from './param.directive';

@Component({
    selector: 'jr-report',
    template: '<div #container></div>'
})

export class ReportComponent {
    @Input() resource:string;
    @Output() error = new EventEmitter();
    @Output() success = new EventEmitter();
    @ViewChild('container') container:ElementRef;
    @ContentChildren(Param) params:Param[];

    constructor(jasper:AngularJasper) {
        jasper.visualizePromise.then((v)=>{
            v.report({
                resource: this.resource,
                container: this.container.nativeElement,
                params: this.getParams(),
                error: this.onError.bind(this),
                success: this.onSuccess.bind(this)
            });
        });
    }

    getParams() {
      return this.params.reduce((memo, param) => {
        memo[param.name] = JSON.parse(param.value.replace(/'/g, '\"'));
        return memo;
      }, {});
    }

    onError(err) {
        this.error.emit({ err });
    }

    onSuccess() {
        this.success.emit();
    }
}
