import {
    NgModule,
    ModuleWithProviders
} from '@angular/core';

import {
    AngularJasper,
    AngularJasperConfig
} from './angular-jasper.service';

import { ReportComponent } from './report/report.component';
import { Param } from './report/param.directive';

@NgModule({
    declarations: [ReportComponent, Param],
    exports: [ReportComponent, Param],
    providers: [AngularJasper]
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
