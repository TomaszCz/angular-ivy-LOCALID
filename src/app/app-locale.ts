import { Injectable } from '@angular/core';

import { AppSettingsService } from './app-settings';

@Injectable({
    providedIn: 'root'
})
export class U4LocaleUtilsService {
    constructor(
        private appSettingsService: AppSettingsService
    ) { }

    getLocale(): string {
        // should contain value - the AppInitializer should hold loading LOCAL_ID until it finish executing...
        console.log(this.appSettingsService.settings);
        return this.appSettingsService.settings;
    }
}