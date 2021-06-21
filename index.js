#!/usr/bin/env node
const program = require('commander');
const fs = require('fs');

program.on('--help',()=>{
    console.log('');
    console.log('other: ...');
})

program.version('1.0.0')