import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { AppSettingsService } from './app-settings';
import { appInitialization } from './app-initialization';
import { U4LocaleUtilsService } from './app-locale';
import { FnDateModule } from './pipes/date-pipe.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FnDateModule
    ],
    providers: [{
        provide: APP_INITIALIZER,
        useFactory: appInitialization,
        deps: [
            AppSettingsService
        ], multi: true
    }, {
        provide: LOCALE_ID,
        deps: [U4LocaleUtilsService],
        useFactory: (u4LocaleUtilsService) => u4LocaleUtilsService.getLocale()
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
