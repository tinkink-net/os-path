import os from 'os';
import path from 'path';

export const home = () => {
    return os.homedir();
};

export const tmp = () => {
    return os.tmpdir();
};

export const applicationData = (appName?: string): string => {
    let appData: string;
    if (process.platform === 'win32') {
        appData = os.homedir() + '\\AppData\\Roaming';
    } else if (process.platform === 'darwin') {
        appData = os.homedir() + '/Library/Application Support';
    } else if (process.platform === 'linux') {
        // todo:
        appData = os.homedir() + '/.config';
    }

    if (appName) {
        return path.join(appData, appName);
    } else {
        return appData;
    }
}
