import os from 'os';
import path from 'path';
import fs from 'fs';

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
        appData = '/var/lib';
    }

    if (appName) {
        return path.join(appData, appName);
    } else {
        return appData;
    }
};

const ensureDirectoryExists = (directory: string) => {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
};

const ensureDirectoryWritable = (directory: string) => {
    fs.accessSync(directory, fs.constants.W_OK);
};

export const getWritablePathForApp = (appName: string): string => {
    const dirs = [
        applicationData(appName),
        path.join(home(), '.' + appName),
        path.join(process.cwd(), '.' + appName),
        path.join(tmp(), appName),
    ];

    for (const dir of dirs) {
        if (!fs.existsSync(dir)) {
            try {
                ensureDirectoryExists(dir);
            } catch (e) {
                continue;
            }
        }
        try {
            ensureDirectoryWritable(dir);
            return dir;
        } catch (e) {
            continue;
        }
    }

    return null;
};
