# os-path System path related utils

## Install & Usage

```sh
npm i @tinkink/os-path
```

```typescript
import { home, tmp, applicationData, getWritablePath } from '@tinkink/os-path';

// get home directory
console.log(home());

// get temporary directory
console.log(tmp());

// get application data directory
console.log(applicationData());

// get application data directory for app
console.log(applicationData('appName'));

// get a writable path for app, will try
// - applicationData('appName')
// - home() + .appName
// - process.cwd() + .appName
// - tmp() + appName
console.log(getWritablePath('appName'));
```

## History

### 1.0.0 2022-08-10

- Initial version
