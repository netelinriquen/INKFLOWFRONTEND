#!/usr/bin/env node
const { spawn } = require('child_process');
const path = require('path');

const vitePath = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');
const child = spawn('node', [vitePath, 'build'], { stdio: 'inherit' });

child.on('close', (code) => {
  process.exit(code);
});