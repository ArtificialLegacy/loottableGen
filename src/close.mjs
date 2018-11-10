import program from '../config.js';
const fs = program.fs;
const data = program.data;

const close = () => {
    let table = {};
  
  data.set("session", table);
  console.info("Current loot table closed.");
};

export default close;
