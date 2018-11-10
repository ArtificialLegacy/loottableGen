import program from '../config.js';
const data = program.data;

const edit = (name, newName, weight, entrydata) => {
  if(!name) return console.info("No entry name provided.");
  
  let loottable = data.get("session");
  
  if(!newName || newName == "~") newName = loottable.items[name].name;
  if(!weight || weight == "~") weight = loottable.items[name].weight;
  if(!entrydata || entrydata == "~") entrydata = loottable.items[name].entrydata;
  
  loottable.items[name].name = newName;
  loottable.items[name].weight = weight;
  loottable.items[name].entrydata = entrydata;
  
  data.set("session", loottable);
  
  console.info("Editted loot table object.");
};

export default edit;
