<p align="center">
  <h1 align="center">AngularJasper2</h1>
</p>

Status: Beta

## What is AngularJasper2?

- The library for **Visualize** and **Angular2**.

## Install

```bash
npm install angularjasper2 --save
```

## Example use:

```ts
import { Component } from '@angular/core';
import { ReportComponent } from 'angularjasper2';

@Component({
  selector: 'project-name-app',
  template: `
  <h2>My Application</h2>
  <jr-report resource="/public/Samples/Reports/07g.RevenueDetailReport"></jr-report>
  `
})
export class MyApp {
}
```

## Developer Guide
If you want to get started quickly on building with AngularJasper2, check out our
developer guide that will teach you everything you need to know to be 
productive with AngularJasper2.

1. [Installation & Setup](docs/1-install-and-setup.md)
