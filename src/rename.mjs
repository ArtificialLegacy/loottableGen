import program from '../config.js';
const data = program.data;

const rename = (name) => {
  let loottable = data.get("session");
  
  if(!name) return console.info("No name provided.");
  
  loottable.name = name;
  
  data.set("session", loottable);
  
  console.info("Current loot table renamed.");
};
