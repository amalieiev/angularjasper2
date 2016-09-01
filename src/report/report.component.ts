import { Component, OnInit, Input, Output, ViewChild, ContentChildren, Directive, ElementRef, EventEmitter } from '@angular/core';

@Directive({
    selector: 'param'
})
class Param {
    @Input() name:string;
    @Input() value:string
}

@Component({
    moduleId: module.id,
    selector: 'jr-report',
    templateUrl: './report.template.html',
    directives: [Param]
})

export class ReportComponent implements OnInit {
    @Input() resource:string;
    @Input() visualize:string;
    @Input() login:string;
    @Input() password:string;
    @Output() error = new EventEmitter();
    @Output() success = new EventEmitter();
    @ViewChild('container') container:ElementRef;
    @ContentChildren(Param) params:Param[];
    report:any;

    ngOnInit() {
        this.loadVisualize();
    }

    renderReport() {
        var self = this;

        visualize({
            auth: {
                name: self.login,
                password: self.password
            }
        }, function (v) {

            self.report = v.report({
                resource: self.resource,
                params: self.getParams(),
                container: self.container.nativeElement,
                error: self.onError.bind(self),
                success: self.onSuccess.bind(self)
            });
        });
    }

    loadVisualize() {
        var script = document.createElement('script');

        script.setAttribute('src', this.visualize);
        script.onload = this.onVisualizeLoaded.bind(this);
        document.body.appendChild(script);
    }

    getParams() {
        return this.params.reduce((memo, param) => {
            memo[param.name] = JSON.parse(param.value.replace(/'/g, '\"'));
            return memo;
        }, {});
    }

    onVisualizeLoaded() {
        this.renderReport();
    }

    onError(err) {
        this.error.emit({ err });
    }

    onSuccess() {
        this.success.emit();
    }
}