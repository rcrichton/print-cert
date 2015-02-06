#!/usr/bin/env node
var pem = require('pem');
var fs = require('fs');

if (process.argv.length < 3) {
  console.log('Usage: print-cert <file.pem>');
} else {
  pem.readCertificateInfo(fs.readFileSync(process.argv[2]), function(err, details) {
    if (err) {
      console.log(err);
    } else {
      console.log(details);
    }
  });
}