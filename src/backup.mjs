import program from '../config.js';
const data = program.data;

const backup = (name) => {
  
  if(!name) return console.info("No name value provided.");
  
  let loottable = data.get("session");
  let backups = data.get("backups");
  
  if(!backups) backups = {};
  
  backups[name] = loottable;
  
  console.info("Created a backup of the current loot table.");
};
