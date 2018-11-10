const commander = require("commander");
const Enmap = require('enmap');
const EnmapLevel = require('enmap-level');
const fs = require("fs");

const data = new Enmap({
  provider: new EnmapLevel({
    name: 'data' 
  })
});

const program = {
  "cmd": commander,
  "data": data,
  "fs": fs,
  "version": require("./package.json").version,
};

modules.exports = program;
