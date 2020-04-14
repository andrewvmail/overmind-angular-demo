import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));



platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    // We do not need zones, we rather use the tracking
    // directive, which gives us a pretty signifcant performance
    // boost. Note that 3rd party libraries might need ngZone,
    // in which case you can not set it to "noop"
    ngZone: "noop"
  })
  .catch(err => console.log(err));
