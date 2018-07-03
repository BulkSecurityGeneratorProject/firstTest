import { NgModule } from '@angular/core';

import { FirstTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [FirstTestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [FirstTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FirstTestSharedCommonModule {}
