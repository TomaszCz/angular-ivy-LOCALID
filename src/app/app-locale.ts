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
        // settings is filled with value en-GB - this is correct
        console.log(this.appSettingsService.settings);
        return this.appSettingsService.settings;
    }
}