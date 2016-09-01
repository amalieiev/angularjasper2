import {
    NgModule,
    Injectable
} from '@angular/core';

import {
    JasperConfig
} from './interfaces';

import { ReportComponent } from './report/report.component';

@NgModule({
    declarations: [ReportComponent],
    exports: [ReportComponent]
})
export class AngularJasperModule {
    static initializeApp(config:JasperConfig) {
        console.log(config);
    }
}

@Injectable()
export class AngularJasper {
    constructor() {
        console.log('AngularJasper constructed');
    }
}

export {
    ReportComponent
}
