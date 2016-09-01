/**
 * Rewrite the package.json that gets published to npm.
 * * Change main to point to angularjasper.js instead of dist/angularjasper.js
 * * Change angular2 to be a peer dependency
 */
var fs = require('fs');
var srcPackage = require('../package.json');
var [MAIN, JSNEXT_MAIN] = ['main', 'jsnext:main'].map(k => srcPackage[k].replace('/dist/', '/'));

var peerDependencies = Object.assign({}, srcPackage.dependencies);
// See note about including firebase as dependency
delete peerDependencies.firebase;
var outPackage = Object.assign({}, srcPackage, {
  peerDependencies,
  main: MAIN,
  typings: "angularjasper2.d.ts",
  "jsnext:main": JSNEXT_MAIN,
  dependencies: {
  }
});

fs.writeFileSync('./dist/package.json', JSON.stringify(outPackage, null, 2));
