import { AppSettingsService } from './app-settings';

export function appInitialization(
    appSettings: AppSettingsService
): any {
    return async () => {
        await appSettings.loadSettings();
    };
}