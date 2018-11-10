import program from '../config.js';
const data = program.data;

const reset = () => {
  let loottable = data.get("session");
  
  let table = {
    "name": loottable.name,
    "item-count": 0,
     "items": {
      "Null": {
        "name": "Null",
        "weight": 0,
        "data": {},
        },
      },
  };
  
  data.set("session", table);
  
  console.info("Current loot table reset");
};

export default reset;
