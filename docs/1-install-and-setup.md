# Installation and Setup

### 1. Clone Angular starter from GitHub.

```bash
git clone https://github.com/angular/quickstart.git project-name
cd project-name
```

### 2. Install Angular starter dependencies.

```bash
npm install
```

Now that you have a new project setup, install AngularJasper2 from npm.

### 3. Install AngularJasper2 from npm.

```bash
npm install angularjasper2 --save
```

### 4. Edit `system.config.js` configuration.

```js
(function (global) {
  System.config({
    ...
    map: {
      ...
      'angularjasper2': 'npm:angularjasper2'
    },
    packages: {
      ...
      angularjasper2: {
        main: './angularjasper2.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);
```

### 5. Setup @NgModule.

Open `app/app.module.ts`, specify your AngularJasper configuration.

```ts
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularJasperModule } from 'angularjasper2';

import { AppComponent }  from './app.component';

const jasperConfig = {
    server: 'http://build-master.jaspersoft.com:5980/jrs-pro-trunk',
    login: 'superuser',
    password: 'superuser'
};

@NgModule({
    imports: [
        BrowserModule,
        AngularJasperModule.initializeApp(jasperConfig)
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

### 6. Edit `app/app.component.ts`.

```bash
import { Component } from '@angular/core';
import { ReportComponent } from 'angularjasper2';

@Component({
    selector: 'my-app',
    template: `
    <h1>My First Angular 2 App</h1>
    <jr-report resource="/public/Samples/Reports/07g.RevenueDetailReport"></jr-report>
    `,
    directives: [ReportComponent]
})
export class AppComponent { }
```

### 7. Serve.

```bash
npm start
```

Run the serve command and go to `localhost:3000` in your browser.

And that's it! If it totally borke, file an issue and let us know.
