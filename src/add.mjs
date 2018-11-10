import program from '../config.js';
const data = program.data;

const add = (name, weight, entrydata) => {
  
  if(!name) return console.info("No name value provided.");
  if(!weight) return console.info("No weight value provided.");
  if(!data) return console.info("No data value provided.")
  
  let loottable = data.get("session");
  
  loottable.items[name] = {
    "name": name,
    "weight": parseInt(weight),
    "entry-data": JSON.parse(data),
  };
  
  data.set("session", loottable);
  
  console.info("Loot table object created.");
};

export default add;
