import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AppSettingsService {
    public settings: any;

    public async loadSettings(): Promise<void> {
        await this.timeout(3000);
        this.settings = 'en-GB';
    }

    async timeout(ms): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

