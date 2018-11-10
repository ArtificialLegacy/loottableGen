import program from '../config.js';
const data = program.data;

const add = (name, weight, data) => {
  let loottable = data.get("session");
  
  loottable.entries[name] = {
    "name": name,
    "weight": parseInt(weight),
    "entry-data": data,
  };
  
  data.set("session", loottable);
};

export default add;
