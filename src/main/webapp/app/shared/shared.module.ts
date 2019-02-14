import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { SocialSharedLibsModule, SocialSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [SocialSharedLibsModule, SocialSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [SocialSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SocialSharedModule {
    static forRoot() {
        return {
            ngModule: SocialSharedModule
        };
    }
}
