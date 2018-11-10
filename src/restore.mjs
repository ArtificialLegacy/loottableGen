import program from '../config.js';
const data = program.data;

const restore = (name) => {
  let backups= data.get("backups");
  let loottable = backups[name];
  
  if(!loottable) return console.info("Backup does not exist!");
  
  data.set("session", loottable);
};

export default restore;
