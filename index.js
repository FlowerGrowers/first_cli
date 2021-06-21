#!/usr/bin/env node
const program = require("commander");

const helpOptins = require('../core/help');
const create = require('../core/create');


program.version(require("../../package.json").version);

helpOptins();
create();

program.parse(process.argv);
