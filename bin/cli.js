#!/usr/bin/env node
const argv = process.argv.slice(2);

const command = argv[0];
const args = argv.slice(1);
const { handler } = require(`../scripts/${command}`);
handler(...args);