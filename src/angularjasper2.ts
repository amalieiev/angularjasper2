import {
    NgModule,
    ModuleWithProviders
} from '@angular/core';

import {
    AngularJasper,
    AngularJasperConfig
} from './angular-jasper.service';

import {
    ReportComponent
} from './report/report.component';

@NgModule({
    declarations: [ReportComponent],
    exports: [ReportComponent],
    providers: [
        AngularJasper
    ]
})
export class AngularJasperModule {
    static initializeApp(config:AngularJasperConfig): ModuleWithProviders {
        return {
            ngModule: AngularJasperModule,
            providers: [
                {provide: AngularJasperConfig, useValue: config}
            ]
        };
    }
}

export {
    AngularJasper,

    ReportComponent,

    AngularJasperConfig
}
