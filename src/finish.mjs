import program from '../config.js';
const fs = program.fs;
const data = program.data;

const finish = () => {
  
  let loottable = data.get("session");
  fs.writeFileSync(`../tables/${loottable.name}.json`, JSON.stringify(loottable, null, 4), (err) => {
    if(err) console.warn(err);
  });
  
  console.info("Loot table saved.");
  
  let table = {
    "name": "Null",
    "item-count": 0,
    "items": [
      {
        "name": "Null",
        "weight": 0,
        "data": {},
      },
    ],
  };
  
  data.set("session", table);
  console.info("Current loot table closed.");

};

export default finish;
