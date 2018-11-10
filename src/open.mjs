import program from '../config.js';
const fs = program.fs;
const data = program.data;

const open = (name) => {
  let loottable = JSON.parse(fs.readFileSync(`../tables/${name}.json`));
  data.set("session", loottable);
  console.info("Loot table opened.");
};

export default open;
