import { describe, it, expect } from 'vitest';
import { home, tmp, applicationData, getWritablePathForApp } from '../index';
import os from 'os';
import fs from 'fs';


describe('index', () => {
    it('home', () => {
        expect(home()).toBe(os.homedir());
    });

    it('tmp', () => {
        expect(tmp()).toBe(os.tmpdir());
    });

    it('applicationData', () => {
        expect(applicationData()).toBe(os.homedir() + '/Library/Application Support');
        expect(applicationData('foo')).toBe(os.homedir() + '/Library/Application Support/foo');
    });

    it('getWritablePathForApp', () => {
        expect(getWritablePathForApp('foo')).toBe(os.homedir() + '/Library/Application Support/foo');
        fs.rmdirSync(os.homedir() + '/Library/Application Support/foo');
    });
});
