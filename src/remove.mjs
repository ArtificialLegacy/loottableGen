import program from '../config.js';

const remove = (name) => {
  let loottable = data.get("session");
  
  delete loottable.items[name];
  
  data.set("session", loottable);
  
  console.info("Loot table object removed.");
};

export default remove;
