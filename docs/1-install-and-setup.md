# Installation and Setup

### 0. Prerequisites

You need the Angular CLI, typings, and TypeScript 2.0. TypeScript 2.0 is required for AngularJasper2.

```bash
npm install -g angular-cli@webpack 
# or install locally
npm install angular-cli@webpack --save-dev
# make sure you have typings installed
npm install -g typings 
npm install -g typescript@2.0
```

### 1. Create a new project

```bash
ng new <project-name>
cd <project-name>
```

The Angular CLI's `new` command will set up the latest Angular build in a new project structure.

Now that you have a new project setup, install AngularJasper2 from npm.

### 2. Install AngularJasper2 from npm.

```bash
npm install angularjasper2 --save
```

### 3. Setup @NgModule.

Open `src/app/app.module.ts`, specify your AngularJasper configuration.

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularJasperModule } from 'angularjasper2';

import { AppComponent } from './app.component';

const jasperConfig = {
  server: 'http://build-master.jaspersoft.com:5980/jrs-pro-trunk',
  login: 'superuser',
  password: 'superuser'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularJasperModule.initializeApp(jasperConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### 4. Add ReportComponent to your component.

Open `src/app/app.component.ts`, import `ReportComponent` and add it to `directives`.

```bash
import { Component } from '@angular/core';
import { ReportComponent } from 'angularjasper2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ReportComponent]
})
export class AppComponent {
  title = 'app works!';
}
```

### 5. Add `jr-report` to component template.

Open `src/app/app.component.ts`, import `ReportComponent` and add it to `directives`.

```html
<h1>
  {{title}}
</h1>
<jr-report resource="/public/Samples/Reports/07g.RevenueDetailReport"></jr-report>
```

### 6. Serve.

```bash
ng serve
```

Run the serve command and go to `localhost:4200` in your browser.

And that's it! If it totally borke, file an issue and let us know.
